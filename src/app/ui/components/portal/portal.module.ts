import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { PortalRoutingModule } from './portal-routing.module';



@NgModule({
  declarations: [
    AdminPageComponent,
    UserPageComponent
  ],
  imports: [
    PortalRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class PortalModule { }
