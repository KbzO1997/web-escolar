import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToastModule } from 'primeng/toast';
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        DialogModule,
        InputTextareaModule,
        ToastModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
