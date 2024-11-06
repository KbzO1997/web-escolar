export class RsTrxService  {
    status?: number;
    code: number;
    message: string;
    token: string;
    
    constructor() {
        this.code = 0;
        this.message = '';
        this.token = "";
    }
}