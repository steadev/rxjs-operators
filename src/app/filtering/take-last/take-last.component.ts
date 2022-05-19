import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeLast, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.takeLast();
  }

  private takeLast(): void {
    interval(1000).pipe(
      takeWhile(x => x < 6),
      takeLast(4)
    ).subscribe(x => console.log(`result: ${x}`));
  }
}
