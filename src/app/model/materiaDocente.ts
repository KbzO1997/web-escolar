import { Catalogo } from "./detalleCatalogo";

export class MateriaDocente {
    id: number;
    idCurso: number;
    idMateria: number;
    idUsuario: number;
    estado: string;
    curso: string;
    materia: string;
    usuario: string;
    
    constructor() {
        this.id = 0;
        this.idCurso = 0;
        this.idMateria = 0;
        this.idUsuario = 0;
        this.estado = 'A';
        this.curso = '';
        this.materia = '';
        this.usuario = '';
    }
}
