import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './combination.component';

const routes: Routes = [
  {
    path: '',
    component: CombinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinationRoutingModule { }
