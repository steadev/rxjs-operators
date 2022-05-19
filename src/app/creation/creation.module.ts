import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { CreationRoutingModule } from "./creation-routing.module";
import { CreationComponent } from './creation.component';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    CreationComponent,
    FromComponent,
    IntervalComponent,
    OfComponent,
    TimerComponent
  ],
  imports: [
    SharedModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
