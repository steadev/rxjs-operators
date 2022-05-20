import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit {

  @Input() operators: string[] = [];
  @Output() onClickOperator = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(operator: string): void {
    this.onClickOperator.emit(operator);
  }
}
