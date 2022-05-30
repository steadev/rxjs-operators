import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-marble-diagram',
  templateUrl: './marble-diagram.component.html',
  styleUrls: ['./marble-diagram.component.scss']
})
export class MarbleDiagramComponent implements OnInit, OnChanges, OnDestroy{

  @Input() published: string | number | undefined;
  @Input() result: string | number | undefined;
  publishedList: {
    value: string | number;
    addedAt: number;
  }[] = [];
  resultList: {
    value: string | number;
    addedAt: number;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('published') && changes.published.currentValue !== undefined) {
      this.publishedList.push({
        value: changes.published.currentValue,
        addedAt: new Date().getTime()
      });
      console.log(this.publishedList);
    }

    if (changes.hasOwnProperty('result') && changes.result.currentValue !== undefined) {
      this.resultList.push({
        value: changes.result.currentValue,
        addedAt: new Date().getTime()
      });
      console.log(this.resultList);
    }
  }

  ngOnDestroy(): void {
    
  }
}
