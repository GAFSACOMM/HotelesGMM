# from logging.config import fileConfig
# from sqlalchemy import engine_from_config
# from sqlalchemy import pool
# from alembic import context
# import sys
# import os
# # Configuración de registro (logging)
from __future__ import with_statement
import logging
logging.basicConfig()
logger = logging.getLogger('alembic')
logger.setLevel(logging.DEBUG)
# sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
# from app.database import DATABASE_URL
# config = context.config
# fileConfig(config.config_file_name)
# from app.base import Base
# target_metadata = Base.metadata
# config.set_main_option("sqlalchemy.url", str(DATABASE_URL))


import os

from alembic import context
from sqlalchemy import engine_from_config, pool
from logging.config import fileConfig

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

# Interpret the config file for Python logging.
# This line sets up loggers basically.
fileConfig(config.config_file_name)

# add your model's MetaData object here
# for 'autogenerate' support
# from myapp import mymodel
# target_metadata = mymodel.Base.metadata
# target_metadata = None

from app.base import Base  # noqa

target_metadata = Base.metadata

def get_url():
    user = os.getenv("POSTGRES_USER", "lunaroja")
    password = os.getenv("POSTGRES_PASSWORD", "sedena")
    server = os.getenv("POSTGRES_SERVER", "172.0.0.1")
    TEST_MODE = os.getenv("TEST_MODE", 'False')
    if TEST_MODE == 'True':
        db = "postgres"
    else:
        db = os.getenv("POSTGRES_DB", "pjaguar")
    return f"postgresql://{user}:{password}@{server}/{db}"


def run_migrations_offline():
    """Run migrations in 'offline' mode."""
    url = get_url()
    context.configure(
        url=url, target_metadata=target_metadata, literal_binds=True, compare_type=True, include_schemas=True
    )

    logger.debug(f"Running migrations offline with URL: {url}")

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    """Run migrations in 'online' mode."""
    configuration = config.get_section(config.config_ini_section)
    configuration["sqlalchemy.url"] = get_url()
    connectable = engine_from_config(
        configuration, prefix="sqlalchemy.", poolclass=pool.NullPool,
    )

    logger.debug(f"Running migrations online with URL: {configuration['sqlalchemy.url']}")

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata, compare_type=True, include_schemas=True
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
