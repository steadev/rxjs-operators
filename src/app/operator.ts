import { RouterService } from './services/router/router.service';
export abstract class Operator {
  abstract operatorGroup: string;
  abstract operators: string[];
  constructor(protected routerService: RouterService) {

  }

  onClickOperator(operator: string): void {
    this.navigateToOperator(operator);
  }
  
  private navigateToOperator(operator: string): void {
    this.routerService.navigate(`${this.operatorGroup}/${operator}`);
  }
}