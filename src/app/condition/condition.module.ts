import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { ConditionRoutingModule } from './condition-routing.module';
import { ConditionComponent } from './condition.component';


@NgModule({
  declarations: [
    ConditionComponent
  ],
  imports: [
    SharedModule,
    ConditionRoutingModule
  ]
})
export class ConditionModule { }
