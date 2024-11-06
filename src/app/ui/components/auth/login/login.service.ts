import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environment';
import { RqUsuario } from '../../../../model/login';
import { RsTrxService } from '../../../../model/response';
import { Observable } from 'rxjs';
import { Persona } from '../../../../model/personData';
import { HttpUtil } from '../../../../services/httpUtil';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginService {
    private endPoint = environment.endPointOTC;

    
    
    constructor(private http:HttpClient, private httpService: HttpUtil) {}

    envLoginTransaction(modelo:RqUsuario):Observable<RsTrxService>{
        return this.http.post<RsTrxService>(`${this.endPoint}validateLogin`, modelo);
    }

    envRecordarTransaction(modelo:RqUsuario):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}rememberPassword`, modelo);
    }

    envDesbloquearTransaction(modelo:RqUsuario):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}unlockUser`, modelo);
    }

    envRegistarTransaction(modelo:Persona):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}registerUser`, modelo);
    }
}