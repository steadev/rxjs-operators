import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { UtilityRoutingModule } from './utility-routing.module';
import { UtilityComponent } from './utility.component';
import { DelayComponent } from './delay/delay.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';


@NgModule({
  declarations: [
    UtilityComponent,
    DelayComponent,
    DelayWhenComponent
  ],
  imports: [
    SharedModule,
    UtilityRoutingModule
  ]
})
export class UtilityModule { }
