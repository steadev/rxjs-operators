import { Component, OnInit } from '@angular/core';
import { RouterService } from './../services/router/router.service';

enum FilteringOperatorType {
  filter = 'filter',
  first = 'first',
  last = 'last',
  take = 'take',
  takeUntil = 'takeUntil',
  takeWhile = 'takeWhile',
  takeLast = 'takeLast',
  skip = 'skip',
  skipUntil = 'skipUntil',
  skipWhile = 'skipWhile',
  debounce = 'debounce',
  debounceTime = 'debounceTime',
  distinct = 'distinct',
  distinctUntilChanged = 'distinctUntilChanged'
}

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  FilteringOperatorType = FilteringOperatorType;

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }

  onClickOperator(type: FilteringOperatorType): void {
    this.routerService.navigate(`filtering/${type}`);
  }
}
