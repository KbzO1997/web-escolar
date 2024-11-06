import { Component, OnInit } from '@angular/core';
import { MateriaDocente } from '../../../../model/materiaDocente';
import { OTC_Service } from '../otc_service';
import { Util } from '../../../../utilidad/util';
import { OTC_ServiceGeneral } from '../../../../services/otc_service';
import { Catalogo, DetalleCatalogo } from '../../../../model/detalleCatalogo';

@Component({
  selector: 'app-asing-matery-page',
  templateUrl: './asing-matery-page.component.html'
})
export class AsingMateryPageComponent implements OnInit {
  
  util: Util = new Util();
  model: MateriaDocente = new MateriaDocente();
  dataList!: Catalogo[];
  dataListSub!: Catalogo[];
  dataListMatDocent!: MateriaDocente[];
  selectedCategories: any[] = [];
  nameUser!: string | null;

  constructor(private serv: OTC_Service, private servGenrl: OTC_ServiceGeneral) { }

  ngOnInit() {
    this.nameUser = this.util.getNameSessionUser();
    this.envConsultCatalogMatery();
  }

  envConsultCatalogMatery(): void {
    this.servGenrl.consultCourseForId(0).subscribe({next: (resp) => {
      this.dataList = resp;
    }});

    this.servGenrl.ConsultMateryForId(0).subscribe({next: (resp) => {
      this.dataListSub = resp;
    }});
  }

  onChangeCurso(event: any) {
    const selectedId = event.value ? event.value.id : null;
    this.model.idCurso = selectedId;
    this.model.idUsuario = this.util.getIdSessionUser();
  }

  envConsultaCatalogo(isVerify: boolean): void {    
    const envId = (isVerify) ? this.util.getIdSessionUser() : 0;
    this.serv.envConsultTransactionId(envId).subscribe({next: (resp) => {
      this.dataListMatDocent = resp;
    }});
  }

  btnEnvDeleteRequest(id: number){
    this.serv.envDeleteTransaction(id).subscribe((res) => {
      this.util.validResponse(res);
      this.envConsultaCatalogo(true);
    },(err) => {
      this.util.NotificationError('Lo sentimos. : ' + err);
    });
  }

  btnEnvPostRequest(): void {
    if(this.util.getIdSessionUser() == 0){
      this.util.NotificationError('No has iniciado sesión. Por favor, inicia sesión antes de intentar registrar.');
      return;
    } 
    this.selectedCategories.forEach(id => {
      this.model.idMateria = id;
      this.serv.envRegisterTransaction(this.model).subscribe((res) => {
        this.util.validResponse(res);
        this.envConsultaCatalogo(true);
      },(err) => {
        this.util.NotificationError('Lo sentimos. : ' + err);
      });
    });    
  }

}
