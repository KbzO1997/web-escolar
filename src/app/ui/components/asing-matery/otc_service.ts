import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { RsTrxService } from '../../../model/response';
import { MateriaDocente } from '../../../model/materiaDocente';
import { HttpUtil } from '../../../services/httpUtil';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class OTC_Service {
    private endPoint = environment.endPointOTC;
    
    constructor(private httpService: HttpUtil) {}

    envConsultTransactionId(id:number):Observable<MateriaDocente[]>{
        return this.httpService.get<MateriaDocente[]>(`${this.endPoint}consultMateryDocentId/${id}`);
    }

    envRegisterTransaction(modelo:MateriaDocente):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}registerMateryDocent`, modelo);
    }

    envDeleteTransaction(id:number):Observable<RsTrxService>{
        return this.httpService.get<RsTrxService>(`${this.endPoint}inactiveMateryDocent/${id}`);
    }
}