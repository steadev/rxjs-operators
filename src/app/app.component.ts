import { Component, HostListener } from '@angular/core';
import { OperatorCategory } from './interfaces/operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  operatorCategories = OperatorCategory;

  onClickOperator(operator: string): void {
    const url = new URL(location.origin);
    url.hash = `#${operator}`;
    location.href = url.href;
  }

  @HostListener('window:hashchange', ['$event'])
  hashChangeHandler(event: HashChangeEvent) {
    const url = new URL(event.newURL);
    const hash = url.hash;
    console.log(hash);
    const operator = hash.replace('#', '');
  }
}
