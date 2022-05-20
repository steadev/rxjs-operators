import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from './../services/router/router.service';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent extends Operator implements OnInit {

  operatorGroup: string = 'transformation';
  operators: string[] = [
    'buffer',
    'bufferCount',
    'bufferTime',
    'bufferToggle',
    'bufferWhen',
    'concatMap',
    'concatMapTo',
    'map',
    'mapTo',
    'mergeMap',
    'mergeMapTo',
    'pairwise',
    'pluck',
    'repeat',
    'scan',
    'switchMap',
    'switchMapTo'
  ]

  constructor(protected routerService: RouterService) {
    super(routerService)
  }

  ngOnInit(): void {
  }

  onClickOperator(operator: string): void {
    this.navigateToOperator(operator);
  }
}
