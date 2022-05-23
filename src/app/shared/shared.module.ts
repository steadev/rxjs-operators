import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CombineLatestComponent } from '../combination/combine-latest/combine-latest.component';
import { ConcatComponent } from '../combination/concat/concat.component';
import { MergeComponent } from '../combination/merge/merge.component';
import { RaceComponent } from '../combination/race/race.component';
import { StartWithComponent } from '../combination/start-with/start-with.component';
import { WithLatestFromComponent } from '../combination/with-latest-from/with-latest-from.component';
import { ZipComponent } from '../combination/zip/zip.component';
import { DefaultIfEmptyComponent } from '../conditional/default-if-empty/default-if-empty.component';
import { EveryComponent } from '../conditional/every/every.component';
import { SequenceEqualComponent } from '../conditional/sequence-equal/sequence-equal.component';
import { FromComponent } from '../creation/from/from.component';
import { IntervalComponent } from '../creation/interval/interval.component';
import { OfComponent } from '../creation/of/of.component';
import { TimerComponent } from '../creation/timer/timer.component';
import { DebounceTimeComponent } from '../filtering/debounce-time/debounce-time.component';
import { DebounceComponent } from '../filtering/debounce/debounce.component';
import { DistinctUntilChangedComponent } from '../filtering/distinct-until-changed/distinct-until-changed.component';
import { DistinctComponent } from '../filtering/distinct/distinct.component';
import { ElementAtComponent } from '../filtering/element-at/element-at.component';
import { FilterComponent } from '../filtering/filter/filter.component';
import { FindIndexComponent } from '../filtering/find-index/find-index.component';
import { FindComponent } from '../filtering/find/find.component';
import { FirstComponent } from '../filtering/first/first.component';
import { IgnoreElementsComponent } from '../filtering/ignore-elements/ignore-elements.component';
import { LastComponent } from '../filtering/last/last.component';
import { SampleComponent } from '../filtering/sample/sample.component';
import { SkipUntilComponent } from '../filtering/skip-until/skip-until.component';
import { SkipWhileComponent } from '../filtering/skip-while/skip-while.component';
import { SkipComponent } from '../filtering/skip/skip.component';
import { TakeLastComponent } from '../filtering/take-last/take-last.component';
import { TakeUntilComponent } from '../filtering/take-until/take-until.component';
import { TakeWhileComponent } from '../filtering/take-while/take-while.component';
import { TakeComponent } from '../filtering/take/take.component';
import { ThrottleTimeComponent } from '../filtering/throttle-time/throttle-time.component';
import { ThrottleComponent } from '../filtering/throttle/throttle.component';
import { DelayWhenComponent } from '../utility/delay-when/delay-when.component';
import { DelayComponent } from '../utility/delay/delay.component';
import { CountComponent } from './../mathmetical/count/count.component';
import { MaxComponent } from './../mathmetical/max/max.component';
import { MinComponent } from './../mathmetical/min/min.component';


@NgModule({
  declarations: [
    DelayComponent,
    DelayWhenComponent,
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
    DistinctUntilChangedComponent,
    ElementAtComponent,
    FindIndexComponent,
    IgnoreElementsComponent,
    SampleComponent,
    ThrottleComponent,
    ThrottleTimeComponent,
    FindComponent,
    CountComponent,
    MaxComponent,
    MinComponent,
    FromComponent,
    IntervalComponent,
    OfComponent,
    TimerComponent,
    DefaultIfEmptyComponent,
    EveryComponent,
    SequenceEqualComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    RaceComponent,
    StartWithComponent,
    WithLatestFromComponent,
    ZipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DelayComponent,
    DelayWhenComponent,
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
    DistinctUntilChangedComponent,
    ElementAtComponent,
    FindIndexComponent,
    IgnoreElementsComponent,
    SampleComponent,
    ThrottleComponent,
    ThrottleTimeComponent,
    FindComponent,
    CountComponent,
    MaxComponent,
    MinComponent,
    FromComponent,
    IntervalComponent,
    OfComponent,
    TimerComponent,
    DefaultIfEmptyComponent,
    EveryComponent,
    SequenceEqualComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    RaceComponent,
    StartWithComponent,
    WithLatestFromComponent,
    ZipComponent
  ]
})
export class SharedModule { }
