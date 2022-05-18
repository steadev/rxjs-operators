import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationComponent } from './combination.component';


@NgModule({
  declarations: [
    CombinationComponent
  ],
  imports: [
    SharedModule,
    CombinationRoutingModule
  ]
})
export class CombinationModule { }
