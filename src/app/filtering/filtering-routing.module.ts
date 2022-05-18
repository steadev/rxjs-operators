import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctComponent } from './distinct/distinct.component';
import { FilterComponent } from './filter/filter.component';
import { FilteringComponent } from './filtering.component';
import { FirstComponent } from './first/first.component';
import { LastComponent } from './last/last.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { SkipComponent } from './skip/skip.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [
  {
    path: '',
    component: FilteringComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'last',
    component: LastComponent
  },
  {
    path: 'take',
    component: TakeComponent
  },
  {
    path: 'takeUntil',
    component: TakeUntilComponent
  },
  {
    path: 'takeWhile',
    component: TakeWhileComponent
  },
  {
    path: 'takeLast',
    component: TakeLastComponent
  },
  {
    path: 'skip',
    component: SkipComponent
  },
  {
    path: 'skipUntil',
    component: SkipUntilComponent
  },
  {
    path: 'skipWhile',
    component: SkipWhileComponent
  },
  {
    path: 'debounce',
    component: DebounceComponent
  },
  {
    path: 'debounceTime',
    component: DebounceTimeComponent
  },
  {
    path: 'distinct',
    component: DistinctComponent
  },
  {
    path: 'distinctUntilChanged',
    component: DistinctUntilChangedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteringRoutingModule { }
