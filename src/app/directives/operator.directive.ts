import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[operator]',
})
export class OperatorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}