import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { MathmeticalRoutingModule } from './mathmetical-routing.module';
import { MathmeticalComponent } from './mathmetical.component';


@NgModule({
  declarations: [
    MathmeticalComponent
  ],
  imports: [
    SharedModule,
    MathmeticalRoutingModule
  ]
})
export class MathmeticalModule { }
