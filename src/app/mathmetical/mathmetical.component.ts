import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from '../services/router/router.service';

@Component({
  selector: 'app-mathmetical',
  templateUrl: '../operator-list.html'
})
export class MathmeticalComponent extends Operator implements OnInit {

  operatorGroup: string = 'mathmetical';
  operators: string[] = [];

  constructor(protected routerService: RouterService) { 
    super(routerService);
  }

  ngOnInit(): void {
  }
}
