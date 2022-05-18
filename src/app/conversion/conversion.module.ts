import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { ConversionRoutingModule } from './conversion-routing.module';
import { ConversionComponent } from './conversion.component';


@NgModule({
  declarations: [
    ConversionComponent
  ],
  imports: [
    SharedModule,
    ConversionRoutingModule
  ]
})
export class ConversionModule { }
