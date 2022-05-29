import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-marble-diagram',
  templateUrl: './marble-diagram.component.html',
  styleUrls: ['./marble-diagram.component.scss']
})
export class MarbleDiagramComponent implements OnInit, OnChanges, OnDestroy{

  @Input() marble: string | number | undefined;
  marbleList: {
    marble: string | number;
    addedAt: string;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('marble') && changes.marble.currentValue !== undefined) {

    }
  }

  ngOnDestroy(): void {
    
  }
}
