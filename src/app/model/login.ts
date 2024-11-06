export class RqUsuario {
    user: string;
    contrasenia: string;
    rol: string;
    estado: string;
    
    constructor() {
        this.user = '';
        this.contrasenia = '';
        this.estado = '';
        this.rol = '';
    }
}

export class RspUsuario {
    nombre: string;
    id: number;
    
    constructor() {
        this.nombre = '';
        this.id = 0;
    }
}