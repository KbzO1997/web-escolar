import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Catalogo, DetalleCatalogo } from '../model/detalleCatalogo';
import { MateriaDocente } from '../model/materiaDocente';
import { HttpUtil } from './httpUtil';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class OTC_ServiceGeneral {
    private endPoint = environment.endPointOTC;
 
    constructor(private httpService: HttpUtil) {}

    envConsultTransactionForName(description:string):Observable<Catalogo[]>{
        return this.httpService.get<Catalogo[]>(`${this.endPoint}consultCatalogForName/${description}`);
        //this.http.get
    }
    consultDetailMateriaForId(id:number):Observable<MateriaDocente[]>{
      return this.httpService.get<MateriaDocente[]>(`${this.endPoint}consultDetailMateriaForId/${id}`);
    }
    consultCourseForId(id:number):Observable<Catalogo[]>{
      return this.httpService.get<Catalogo[]>(`${this.endPoint}consultCourseForId/${id}`);
    }
    ConsultMateryForId(id:number):Observable<Catalogo[]>{
      return this.httpService.get<Catalogo[]>(`${this.endPoint}ConsultMateryForId/${id}`);
    }
}

