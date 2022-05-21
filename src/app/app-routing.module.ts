import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'creation',
    loadChildren: () => import('./creation/creation.module').then(m => m.CreationModule)
  },
  {
    path: 'conditional',
    loadChildren: () => import('./conditional/conditional.module').then(m => m.ConditionalModule)
  },
  {
    path: 'filtering',
    loadChildren: () => import('./filtering/filtering.module').then(m => m.FilteringModule)
  },
  {
    path: 'combination',
    loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule)
  },
  {
    path: 'mathmetical',
    loadChildren: () => import('./mathmetical/mathmetical.module').then(m => m.MathmeticalModule)
  },
  {
    path: 'transformation',
    loadChildren: () => import('./transformation/transformation.module').then(m => m.TransformationModule)
  },
  {
    path: 'utility',
    loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
