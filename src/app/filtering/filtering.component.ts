import { Component, OnInit } from '@angular/core';
import { RouterService } from './../services/router/router.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  operators = [
    'filter',
    'first',
    'last',
    'take',
    'takeUntil',
    'takeWhile',
    'takeLast',
    'skip',
    'skipUntil',
    'skipWhile',
    'debounce',
    'debounceTime',
    'distinct',
    'distinctUntilChanged',
    'throttle',
    'throttleTime',
    'find',
    'findIndex',
    'elementAt',
    'ignoreElements',
    'sample'
  ]

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }

  onClickOperator(type: string): void {
    this.routerService.navigate(`filtering/${type}`);
  }
}
