import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { UtilityRoutingModule } from './utility-routing.module';
import { UtilityComponent } from './utility.component';


@NgModule({
  declarations: [
    UtilityComponent
  ],
  imports: [
    SharedModule,
    UtilityRoutingModule
  ]
})
export class UtilityModule { }
