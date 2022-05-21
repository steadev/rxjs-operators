import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from './../services/router/router.service';

@Component({
  selector: 'app-utility',
  templateUrl: '../operator-list.html'
})
export class UtilityComponent extends Operator implements OnInit {

  operatorGroup: string = 'utility';
  operators: string[] = [
    'delay',
    'delayWhen'
  ];

  constructor(protected routerService: RouterService) { 
    super(routerService);
  }

  ngOnInit(): void {
  }
}
