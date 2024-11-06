import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsingMateryPageComponent } from './asing-matery-page/asing-matery-page.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: AsingMateryPageComponent }
  ])],
  exports: [RouterModule]
})

export class AsingMateryRoutingModule { }