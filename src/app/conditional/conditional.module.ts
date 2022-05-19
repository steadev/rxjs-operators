import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { ConditionalRoutingModule } from './conditional-routing.module';
import { ConditionalComponent } from './conditional.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { SequenceEqualComponent } from './sequence-equal/sequence-equal.component';


@NgModule({
  declarations: [
    ConditionalComponent,
    DefaultIfEmptyComponent,
    EveryComponent,
    SequenceEqualComponent
  ],
  imports: [
    SharedModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
