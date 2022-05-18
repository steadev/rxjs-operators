import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombinationComponent } from './combination/combination.component';
import { ConditionComponent } from './condition/condition.component';
import { ConversionComponent } from './conversion/conversion.component';
import { FilteringComponent } from './filtering/filtering.component';
import { MathComponent } from './math/math.component';
import { UtilityComponent } from './utility/utility.component';


@NgModule({
  declarations: [
    AppComponent,
    FilteringComponent,
    ConversionComponent,
    CombinationComponent,
    MathComponent,
    UtilityComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
