import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  content: string = '';
  published: string | number | undefined;
  result: string | number | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.filter();
  }

  filter(): void {
    interval(1000).pipe(
      take(10),
      tap(x => this.published = x),
      filter(x => x % 2 === 0)
    )
    .subscribe(x => this.result = x);
  }
}
