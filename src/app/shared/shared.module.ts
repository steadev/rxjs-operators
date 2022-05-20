import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OperatorListComponent } from "../common/operator-list/operator-list.component";


@NgModule({
  declarations: [
    OperatorListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    OperatorListComponent
  ]
})
export class SharedModule { }
