import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { RouterService } from '../services/router/router.service';

@Component({
  selector: 'app-creation',
  templateUrl: '../operator-list.html'
})
export class CreationComponent extends Operator implements OnInit {

  operatorGroup: string = 'creation';
  operators: string[] = [];

  constructor(protected routerService: RouterService) { 
    super(routerService);
  }

  ngOnInit(): void {
  }
}
