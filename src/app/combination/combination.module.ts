import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationComponent } from './combination.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { RaceComponent } from './race/race.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipComponent } from './zip/zip.component';


@NgModule({
  declarations: [
    CombinationComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    RaceComponent,
    StartWithComponent,
    WithLatestFromComponent,
    ZipComponent
  ],
  imports: [
    SharedModule,
    CombinationRoutingModule
  ]
})
export class CombinationModule { }
