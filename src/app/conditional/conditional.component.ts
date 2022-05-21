import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from '../services/router/router.service';

@Component({
  selector: 'app-conditional',
  templateUrl: '../operator-list.html'
})
export class ConditionalComponent extends Operator implements OnInit {

  operatorGroup: string = 'conditional';
  operators: string[] = [];

  constructor(protected routerService: RouterService) { 
    super(routerService);
  }

  ngOnInit(): void {
  }
}
