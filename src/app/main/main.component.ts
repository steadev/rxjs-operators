import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router/router.service';

enum OperatorType {
  Filtering = 'filtering',
  Conversion = 'conversion',
  Combinatorial = 'combinatorial',
  Math = 'math',
  Utility = 'utility',
  Conditional = 'conditional'
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  OperatorType = OperatorType;

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }

  onClickOperatorType(type: OperatorType): void {
    this.routerService.navigate(type);
  }
}

