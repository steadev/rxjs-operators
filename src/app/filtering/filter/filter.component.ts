import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  content: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.filter();
  }

  filter(): void {
    range(1, 5).pipe(filter(x => x % 2 === 0))
	    .subscribe(x => console.log(`result: ${x}`));
  }
}
