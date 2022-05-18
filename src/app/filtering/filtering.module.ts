import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FilteringRoutingModule } from './filtering-routing.module';
import { FilteringComponent } from './filtering.component';
import { FilterComponent } from './filter/filter.component';
import { FirstComponent } from './first/first.component';
import { LastComponent } from './last/last.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { SkipComponent } from './skip/skip.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctComponent } from './distinct/distinct.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';


@NgModule({
  declarations: [
    FilteringComponent,
    FilterComponent,
    FirstComponent,
    LastComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    TakeLastComponent,
    SkipComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    DebounceComponent,
    DebounceTimeComponent,
    DistinctComponent,
    DistinctUntilChangedComponent
  ],
  imports: [
    SharedModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
