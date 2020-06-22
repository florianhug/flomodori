import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlomodoryComponent } from './flomodory.component';

describe('FlomodoryComponent', () => {
  let component: FlomodoryComponent;
  let fixture: ComponentFixture<FlomodoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlomodoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlomodoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
