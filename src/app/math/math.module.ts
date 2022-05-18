import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math.component';


@NgModule({
  declarations: [
    MathComponent
  ],
  imports: [
    SharedModule,
    MathRoutingModule
  ]
})
export class MathModule { }
