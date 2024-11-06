import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { Catalogo } from '../../../model/detalleCatalogo';
import { RsTrxService } from '../../../model/response';
import { HttpUtil } from '../../../services/httpUtil';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class OTC_Service {
    private endPoint = environment.endPointOTC;
    
    constructor(private httpService: HttpUtil) {}

    envConsultTransactionForId(id:number, isFlag: string):Observable<Catalogo[]>{
        return this.httpService.get<Catalogo[]>(`${this.endPoint}${this.onReturenFlag(isFlag, "C")}/${id}`);
    }
    envRegisterTransaction(modelo:Catalogo, isFlag: string):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}${this.onReturenFlag(isFlag, "P")}`, modelo);
    }
    envDeleteTransaction(id:number, isFlag: string):Observable<RsTrxService>{
        return this.httpService.get<RsTrxService>(`${this.endPoint}${this.onReturenFlag(isFlag, "I")}/${id}`);
    }
    onReturenFlag(isFlag : string, petition: string) : string{
        let resp = "";        
        if(isFlag == "C"){
            resp = (petition == "C") ? "consultCourseForId" : (petition == "P") ? "registerCourse" :  "inactiveCourse" 
        }else if(isFlag == "M") {
            resp = (petition == "C") ? "consultMateryForId" : (petition == "P") ? "registerMatery" :  "inactiveMatery" 
        }
        return resp;
    }
}