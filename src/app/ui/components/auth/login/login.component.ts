import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut  } from 'firebase/auth';
import { environment } from '../../../../../environment';
import { RqUsuario } from '../../../../model/login';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from '../../../../utilidad/util';
import { Persona } from '../../../../model/personData';
import { RsTrxService } from '../../../../model/response';
import { ValidatorForm } from '../../../../utilidad/validator';
import { MessageService } from 'primeng/api';

const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService]
})
export class LoginComponent {
  model: RqUsuario = new RqUsuario();  
  person: Persona = new Persona();  
  util: Util = new Util();
  validator: ValidatorForm = new ValidatorForm();
  
  onPerson: boolean = false;
  onPassword: boolean = false;
  onUnclok: boolean = false;

  constructor(public layoutService: LayoutService, private serv: LoginService, private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  //Ref.1 Función para iniciar sesión con Google
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      if(result.user != null) {
        this.sessionStorage(result.user.displayName ?? '', result.user.photoURL ?? '', result.user.email ?? '');
      }
    })
    .catch((err) => {
      this.util.NotificationError(err);
    });
  }

  //Ref.2 Función para iniciar sesión con Facebook
  loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      if(result.user != null) {
        this.sessionStorage(result.user.displayName ?? '', result.user.photoURL ?? '', result.user.email ?? '');
      }      
    })
    .catch((err) => {
      this.util.NotificationError(err);
    });
  }

  //Ref.3 Función para iniciar con el sistema
  loginWithDb() {
    this.serv.envLoginTransaction(this.model).subscribe((resp) => {

      console.log(resp);
      if(resp.status == 200){
        sessionStorage.setItem('id', resp.code.toString());
        sessionStorage.setItem('nombre', resp.message);
        sessionStorage.setItem('token', resp.token);
        this.router.navigate(['/admin-page']);
      }else{
        this.util.NotificationError(resp.message);
      }
    }, (err) => {
      this.util.NotificationError('err');
    });
  }

  //Ref.4 Función para eliminar la session
  logout() {
    signOut(auth)
    .then(() => {
      this.deleteStorage();
      this.router.navigate(['/login']);
    })
    .catch((err) => {
      this.util.NotificationError('Error al cerrar sesión: ' + err);
    });
  }

  //Ref.5 Session Storage
  sessionStorage(displayName: string, photoURL: string, email: string) {
    sessionStorage.setItem('nombre', displayName);
    sessionStorage.setItem('photo', photoURL);
    sessionStorage.setItem('email', email);
  }

  //Ref.6 Elimnar Session Storage
  deleteStorage(){
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('photo');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
  }

  //Ref.7 Registrar Person
  btnEnvRequest(): void {
    if (!this.validatePerson()) {
      return;
    }
    
    this.serv.envRegistarTransaction(this.person).subscribe((res) => {
      (res.status == 200)  ? this.conf(res) : this.util.NotificationError(res.message);
    },() => {
      this.util.NotificationError('err');
    });
    this.onPerson = false;
  }

  //Ref.8 Recordar Contraseña
  btnEnvTrxRemember(): void {
    this.serv.envRecordarTransaction(this.model).subscribe((res) => {
      (res.status == 200)  ? this.conf(res) : this.util.NotificationError(res.message);
    },() => {
      this.util.NotificationError('err');
    });
    this.onPassword = false;
    this.limpiar();
  }

  //Ref.9 Desbloquear Usuario
  btnEnvTrxUnlock(): void {
    this.serv.envDesbloquearTransaction(this.model).subscribe((res) => {
      (res.status == 200)  ? this.conf(res) : this.util.NotificationError(res.message);
    },() => {
      this.util.NotificationError('err');
    });
    this.onUnclok = false;
    this.limpiar();
  }

  conf(res: RsTrxService): void {
    this.limpiar();
    this.util.validResponse(res);
    setTimeout(() => {this.redirectTo();}, 3000);
  }

  redirectTo() {
    this.router.navigate(['/admin-page'], { relativeTo: this.route.parent });
  }

  limpiar(): void {
    this.model = new RqUsuario();
  }

  validatePerson(): boolean {
    if (!this.validator.isFormValidPerson(this.person)) {
      //this.util.NotificationError('Por favor, completa todos los campos obligatorios.');
      this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Por favor, completa todos los campos obligatorios.' });
   
      return false;
    }
    return true;
  }
}