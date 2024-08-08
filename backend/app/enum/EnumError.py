import enum

class EnumError(str, enum.Enum):
    XSO_400_INACTIVE = "Usuario inactivo."
    XSO_401_NOT_AUTHORIZED = "No autorizado."
    XSO_403_INVALID_CREDENTIALS = "No se pueden validar las credenciales."
    XSO_404_NOT_FOUND = "Entidad no encontrada."
    XSO_404_USER_NOT_FOUND = "Usuario no encontrado."
    XSO_421_NOT_PRIVILEGES = "El usuario no tiene permisos para abrir el sistema."
    XSO_421_USER_ALREADY = "El usuario ya existe en el sistema."
    XSO_422_NOT_AUTHENTICATED_OR_NOT_EXIST = "No tiene los suficientes privilegios o no existe en el sistema."