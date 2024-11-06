import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseStudentPageComponent } from './course-student-page/course-student-page.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: CourseStudentPageComponent }
  ])],
  exports: [RouterModule]
})

export class CourseStudentRoutingModule { }