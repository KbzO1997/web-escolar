import { Component, OnInit } from '@angular/core';
import { Catalogo, DetalleCatalogo } from '../../../../model/detalleCatalogo';
import { OTC_Service } from '../otc_service';
import { Util } from '../../../../utilidad/util';
import { OTC_ServiceGeneral } from '../../../../services/otc_service';

@Component({
  selector: 'app-parametry-page',
  templateUrl: './parametry-page.component.html'
})
export class ParametryPageComponent implements OnInit {
  
  util: Util = new Util();
  model: Catalogo = new Catalogo();
  dataList!: Catalogo[];
  data!: Catalogo[];
  selectedId: number = 0; 
  isDeleteFlag : string = "";

  constructor(private serv: OTC_Service, private servGenrl: OTC_ServiceGeneral) { }

  ngOnInit() {
    this.envConsultCatalog();
  }

  envConsultCatalog(): void {
    this.servGenrl.envConsultTransactionForName('S').subscribe({next: (resp) => {
      this.dataList = resp;
    }});
  }

  envConsultMateryCourse(): void {
    this.serv.envConsultTransactionForId(0, this.onReturnFlag()).subscribe({next: (resp) => {
      this.data = resp;
    }});
  }

  btnEnvDeleteRequest(id: number){
    this.serv.envDeleteTransaction(id, this.isDeleteFlag).subscribe((res) =>{
      this.handleSuccessResponse(res);
    },(err) => {
      this.util.NotificationError('Lo sentimos. : ' + err);
    });
    
  }

  btnEnvPostRequest(): void {
    this.serv.envRegisterTransaction(this.model, this.onReturnFlag()).subscribe((res) => {
      this.handleSuccessResponse(res);
    },(err) => {
      this.util.NotificationError('Lo sentimos. : ' + err);
    });
  }

  onChangeSelect(event: any) {
    this.selectedId = event.value ? event.value.id : null;
  }

  onReturnFlag(): string {
    const filtered = this.dataList?.find(item => item.id === this.selectedId);
    const resp = (filtered == null) ? "C" : (filtered?.descripcion == "Curso") ? "C" : "M";
    this.isDeleteFlag = resp;
    return resp;
  }

  handleSuccessResponse(res: any) {
    this.util.validResponse(res);
    this.envConsultMateryCourse();
    this.limpiar();
  }

  limpiar(): void {
    this.model = new Catalogo();
  }

  

}
