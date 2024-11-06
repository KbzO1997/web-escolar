export class Persona {
    id: number;
    idUsuario: number;
    nombres: string;
    primerApellido: string;
    segundoApellido: string;
    cedula: string;
    telefono: string;
    email: string;
    direccion: string;
    contacto: string;
    user: Usuario;

    constructor() {
        this.id = 0;
        this.idUsuario = 0;
        this.nombres = '';
        this.primerApellido = '';
        this.segundoApellido = '';
        this.cedula = '';
        this.telefono = '';
        this.email = '';
        this.direccion = '';
        this.contacto = '';
        this.user = new Usuario();
    }
}

export class Usuario {
    user: string;
    contrasenia: string;
    rol: string;

    constructor() {
        this.user = '';
        this.contrasenia = '';
        this.rol = '';
    }
}