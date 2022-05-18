import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FilteringRoutingModule } from './filtering-routing.module';
import { FilteringComponent } from './filtering.component';


@NgModule({
  declarations: [
    FilteringComponent
  ],
  imports: [
    SharedModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
