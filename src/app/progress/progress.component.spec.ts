import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressComponent} from './progress.component';
import {Component} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {TimeFormatPipe} from '../timeFormat.pipe';

describe('ProgressComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressComponent, TimeFormatPipe, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: `app-host-component`,
  template: `
    <app-progress [currentSeconds$]="timerValue$" [totalSeconds$]="totalSeconds$"></app-progress>`
})
class TestHostComponent {
  public timerValue$: Subject<number>;
  public totalSeconds$: Subject<number>;

  constructor() {
    this.timerValue$ = new BehaviorSubject(100);
    this.totalSeconds$ = new BehaviorSubject(100);
  }
}
