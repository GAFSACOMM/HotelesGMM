FROM node:18-alpine as dev

RUN apk add --no-cache libc6-compat && npm install -g pnpm

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiar el código fuente
COPY . .

# Configurar variables de entorno
ARG NEXT_PUBLIC_CODE_SYSTEM
ARG NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY
ARG NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX
ARG NEXT_PUBLIC_SSO_WEB
ARG NEXT_PUBLIC_API_URL_SSO
ARG NEXT_PUBLIC_API_VER_SSO

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_CODE_SYSTEM $NEXT_PUBLIC_CODE_SYSTEM
ENV NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY $NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY
ENV NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX $NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX
ENV NEXT_PUBLIC_SSO_WEB $NEXT_PUBLIC_SSO_WEB
ENV NEXT_PUBLIC_API_URL_SSO $NEXT_PUBLIC_API_URL_SSO
ENV NEXT_PUBLIC_API_VER_SSO $NEXT_PUBLIC_API_VER_SSO

# Construir la aplicación
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000 || exit 1

# Iniciar la aplicación
CMD ["npm", "run", "dev"]