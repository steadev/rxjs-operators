import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathmeticalComponent } from './mathmetical.component';

const routes: Routes = [
  {
    path: '',
    component: MathmeticalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathmeticalRoutingModule { }
