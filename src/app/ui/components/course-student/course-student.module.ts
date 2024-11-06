
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
import { CourseStudentRoutingModule } from './course-student-routing.module';
import { CourseStudentPageComponent } from './course-student-page/course-student-page.component';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    CourseStudentPageComponent
  ],
  imports: [
    CommonModule,
    CourseStudentRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    MenuModule,
    ListboxModule
  ]
})
export class CourseStudentModule { }
