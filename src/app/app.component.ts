import { Component } from '@angular/core';
import { OperatorCategory } from './interfaces/operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  operatorCategories = OperatorCategory;
}
