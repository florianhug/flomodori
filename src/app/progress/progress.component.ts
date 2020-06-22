import {Component, Input, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input()
  totalSeconds$: Observable<number>;

  @Input()
  currentSeconds$: Observable<number>;

  percentage$: Observable<number>;

  constructor() {
  }

  ngOnInit(): void {
    this.percentage$ = combineLatest(this.totalSeconds$, this.currentSeconds$)
      .pipe(
        map(([total, current]) => (total - current) / total),
        map(value => value * 100),
        map(value => Math.ceil(value))
      );

    this.percentage$.subscribe(value => console.log(`Value: ${value}`));

  }

}
