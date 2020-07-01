import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscription, timer} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-flomodory',
  templateUrl: './flomodory.component.html',
  styleUrls: ['./flomodory.component.scss']
})
export class FlomodoryComponent implements OnInit {

  private static readonly DEFAULT_TIMER: number = 1800;

  private readonly _timerValue$: Subject<number>;
  private readonly _totalSeconds$: BehaviorSubject<number>;
  private readonly _notificationService: NotificationService;
  private timer$: Subscription;
  isRunning: boolean;

  constructor(notificationService: NotificationService) {
    this._notificationService = notificationService;
    this._timerValue$ = new BehaviorSubject(FlomodoryComponent.DEFAULT_TIMER);
    this._totalSeconds$ = new BehaviorSubject(FlomodoryComponent.DEFAULT_TIMER);
  }

  ngOnInit(): void {
  }

  public startTimer() {
    this.isRunning = true;
    if (!!this.timer$) {
      this.timer$.unsubscribe();
    }
    this.timer$ = timer(0, 1000)
      .pipe(
        map(value => FlomodoryComponent.DEFAULT_TIMER - value),
        takeWhile(value => value >= 0))
      .subscribe(value => this._timerValue$.next(value),
        error => console.log(error),
        () => {
          this._timerValue$.next(FlomodoryComponent.DEFAULT_TIMER);
          this._notificationService.create('Time is up!').subscribe(
            res => console.log(res),
            err => console.log(err)
          );
          this.isRunning = false;
        });
  }

  get timerValue$(): Observable<number> {
    return this._timerValue$;
  }

  get totalSeconds$(): Observable<number> {
    return this._totalSeconds$;
  }

}
