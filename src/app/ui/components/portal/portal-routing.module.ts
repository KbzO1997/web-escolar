import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: 'admin-page', component: AdminPageComponent },
      { path: 'user-page', component: UserPageComponent }
      
  ])],
  exports: [RouterModule]
})

export class PortalRoutingModule { }