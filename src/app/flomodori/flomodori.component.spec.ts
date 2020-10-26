import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlomodoriComponent } from './flomodori.component';

describe('FlomodoryComponent', () => {
  let component: FlomodoriComponent;
  let fixture: ComponentFixture<FlomodoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlomodoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlomodoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
