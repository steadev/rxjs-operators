import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CountComponent } from './mathmetical/count/count.component';
import { MaxComponent } from './mathmetical/max/max.component';
import { MinComponent } from './mathmetical/min/min.component';
import { ReduceComponent } from './mathmetical/reduce/reduce.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountComponent,
    MaxComponent,
    MinComponent,
    ReduceComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
