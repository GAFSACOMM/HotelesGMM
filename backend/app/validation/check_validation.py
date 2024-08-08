import re
from fastapi import HTTPException, status


class Validations:

    def __init__(self):
        pass

    @staticmethod
    def validate_phone(phone):
        if not isinstance(phone, str) or len(phone) > 16:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="El número telefónico no es válido.",
            )
        return True

    @staticmethod
    def validate_email(email):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="El correo electrónico no es válido.",
            )
        return True

    @staticmethod
    def validate_password(password):
        if len(password) < 8:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="La contraseña debe tener al menos 8 caracteres.",
            )
        return True

    @staticmethod
    def validate_is_not_none(entity, detail):
        if entity is not None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=detail
            )

    @staticmethod
    def validate_len_min(entity, length: int):
        if entity is not None:
            if len(entity) < length:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f'El {entity} debe tener al menos {len} caracteres.'
                )
        return True

    @staticmethod
    def validate_len_max(entity, length: int):
        if entity is not None:
            if len(entity) > length:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f'El {entity} no puede tener más de {length} caracteres.'
                )
        return True

    @staticmethod
    def validate_greather_than(x: int, y: int, detail: str):
        if x > y:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=detail
            )
        return True
