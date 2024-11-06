import { Component, OnInit  } from '@angular/core';
import { Util } from '../../../../utilidad/util';
import { OTC_ServiceGeneral } from '../../../../services/otc_service';
import { EstudianteCurso } from '../../../../model/estudianteCurso';
import { Catalogo, DetalleCatalogo } from '../../../../model/detalleCatalogo';
import { MateriaDocente } from '../../../../model/materiaDocente';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-course-student-page',
  templateUrl: './course-student-page.component.html'
})
export class CourseStudentPageComponent implements OnInit {
  
  util: Util = new Util();
  model: EstudianteCurso = new EstudianteCurso();
  dataList!: Catalogo[];
  dataListSub!: MateriaDocente[];
  nombreDocente: string = "";
  materyList: string[] = [];
  selectedList: SelectItem = { value: '' };
  
  constructor(private servGenrl: OTC_ServiceGeneral) { }

  ngOnInit() {
   this.envConsult();
  }
 
  envConsult(): void {
    this.servGenrl.consultCourseForId(0).subscribe({next: (resp) => {
      this.dataList = resp;
    }});
  }

  envConsultDetailCatalog(id: number): void {
    this.servGenrl.consultDetailMateriaForId(id).subscribe({next: (resp) => {
      this.dataListSub = resp;
      this.nombreDocente = this.dataListSub[0].usuario;

      this.dataListSub.forEach((model) => {
        this.materyList.push(model.materia);
      });

    }});

    
  }

  btnEnvPostRequest(): void {
    /*this.serv.envRegisterTransaction(this.model).subscribe((res) => {
      this.util.validResponse(res);
      this.envConsultDetailCatalog();
    },(err) => {
      this.util.NotificationError('Lo sentimos. : ' + err);
    });*/
  }

  onChangeSelect(event: any) {
    const selectedId = event.value ? event.value.id : null;
    this.model.idCurso = selectedId;
    //this.envConsultDetailCatalog(this.model.idCurso);
  }
}
