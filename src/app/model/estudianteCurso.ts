export class EstudianteCurso {
    id: number;
    idCurso: number;
    idUsuario: number;
    estado: string;
    
    constructor() {
        this.id = 0;
        this.idCurso = 0;
        this.idUsuario = 0;
        this.estado = 'A';
    }
} 