import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  operatorTypes = [
    'Filtering',
    'Transformation',
    'Combination',
    'Mathmetical',
    'Utility',
    'Conditional',
    'Creation'
  ]
}
