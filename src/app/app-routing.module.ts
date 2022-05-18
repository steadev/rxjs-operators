import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'filtering',
    loadChildren: () => import('./filtering/filtering.module').then(m => m.FilteringModule)
  },
  {
    path: 'conversion',
    loadChildren: () => import('./conversion/conversion.module').then(m => m.ConversionModule)
  },
  {
    path: 'combinatorial',
    loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule)
  },
  {
    path: 'math',
    loadChildren: () => import('./math/math.module').then(m => m.MathModule)
  },
  {
    path: 'utility',
    loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule)
  },
  {
    path: 'conditional',
    loadChildren: () => import('./condition/condition.module').then(m => m.ConditionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
