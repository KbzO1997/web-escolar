import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametryPageComponent } from './parametry-page/parametry-page.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ParametryRoutingModule } from './parametry-routing.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';


@NgModule({
  declarations: [
    ParametryPageComponent
  ],
  imports: [
    CommonModule,
    ParametryRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule
  ]
})
export class ParametryModule { }
