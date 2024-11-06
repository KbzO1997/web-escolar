import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AsingMateryRoutingModule } from './asing-matery-routing.module';
import { AsingMateryPageComponent } from './asing-matery-page/asing-matery-page.component';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [
    AsingMateryPageComponent
  ],
  imports: [
    CommonModule,
    AsingMateryRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    CheckboxModule
  ]
})
export class AsingMateryModule { }
