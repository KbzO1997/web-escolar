import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParametryPageComponent } from './parametry-page/parametry-page.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: ParametryPageComponent }
  ])],
  exports: [RouterModule]
})

export class ParametryRoutingModule { }