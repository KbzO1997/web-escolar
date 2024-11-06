import Swal from 'sweetalert2';
import { RsTrxService } from '../model/response';
import { Table } from 'primeng/table';
export class Util {
    errorText = "Ha ocurrido un error inesperado. Por favor, intenta nuevamente más tarde.";

    NotificationSuccess(text: string) {
        Swal.fire({
            title: 'Transacción realizada con éxito.',
            text: text,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    NotificationError(text: string) {
        let description = (text == "err") ? this.errorText : text;
        Swal.fire({
          title: 'Lo sentimos!',
          text: description,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
    }

    validResponse(resp: RsTrxService): void{
        (resp.status == 200) ? this.NotificationSuccess('Registrado exitosamente.') : this.NotificationError(resp.message);
    }

    printRequest(objeto: any):void {
        console.log("*************REQUEST*****************")
        console.log(objeto);
        console.log("******************************")
      }
    
    printResponse(objeto: any):void {
        console.log("*************RESPONSE*****************")
        console.log(objeto);
        console.log("******************************")
    }

    obtIdUser(): number {
        const userId = sessionStorage.getItem('usuariocli_id') ? Number(sessionStorage.getItem('usuariocli_id')) : 0;
        return userId;
    }

    textNumber(event: KeyboardEvent) {
        const pattern = /^[0-9]*$/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
    }

    textStringNotScape(event: KeyboardEvent) {
        const pattern = /^[a-zA-Z]*$/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
    }

    textStringNumber(event: KeyboardEvent) {
        const pattern = /^[a-zA-Z0-9\s]*$/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
    }

    textStringScape(event: KeyboardEvent) {
        const pattern = /^[a-zA-Z ]*$/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
    }

    textNotSpace(event: KeyboardEvent) {
        if (event.key === ' ') {
          event.preventDefault();
        }
    }

    onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    getNameSessionUser(): string | null {
      const name = sessionStorage.getItem('nombre');
      return (name) ? name : null;
    }

    getIdSessionUser(): number | 0 {
      const id = sessionStorage.getItem('id');
      return (id) ? Number(id) : 0;
    }
}