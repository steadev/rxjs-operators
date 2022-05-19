import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { TransformationRoutingModule } from './transformation-routing.module';
import { TransformationComponent } from "./transformation.component";
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';
import { MapComponent } from './map/map.component';
import { MapToComponent } from './map-to/map-to.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeMapToComponent } from './merge-map-to/merge-map-to.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { PluckComponent } from './pluck/pluck.component';
import { RepeatComponent } from './repeat/repeat.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchMapToComponent } from './switch-map-to/switch-map-to.component';


@NgModule({
  declarations: [
    TransformationComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    ConcatMapComponent,
    ConcatMapToComponent,
    MapComponent,
    MapToComponent,
    MergeMapComponent,
    MergeMapToComponent,
    PairwiseComponent,
    PluckComponent,
    RepeatComponent,
    ScanComponent,
    SwitchMapComponent,
    SwitchMapToComponent
  ],
  imports: [
    SharedModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
