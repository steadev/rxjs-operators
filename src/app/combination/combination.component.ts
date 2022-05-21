import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from '../services/router/router.service';

@Component({
  selector: 'app-combination',
  templateUrl: '../operator-list.html'
})
export class CombinationComponent extends Operator implements OnInit {

  operatorGroup: string = 'combination';
  operators = [];

  constructor(protected routerService: RouterService) { 
    super(routerService);
  }

  ngOnInit(): void {
  }
}
