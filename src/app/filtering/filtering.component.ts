import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from './../services/router/router.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent extends Operator implements OnInit {

  operatorGroup: string = 'filtering';
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

  constructor(protected routerService: RouterService) {
    super(routerService);
  }

  ngOnInit(): void {
  }

  onClickOperator(type: string): void {
    this.navigateToOperator(type);
  }
}
