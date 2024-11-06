export class DetalleCatalogo {
    id: number;
    idCatalogo: number;
    nombre: string;
    estado: string;
    idCatalogoNavigation: Catalogo;

    constructor() {
        this.id = 0;
        this.idCatalogo = 0;
        this.nombre = '';
        this.estado = 'A';
        this.idCatalogoNavigation = new Catalogo()
    }
}

export class Catalogo {
    id: number;
    nombre: string;
    descripcion: string;
    estado: string;
    
    constructor() {
        this.id = 0;
        this.nombre = '';
        this.estado = 'A';
        this.descripcion = '';
    }
}