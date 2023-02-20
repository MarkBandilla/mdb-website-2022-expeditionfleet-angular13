import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesAndRatesComponent } from './schedules-and-rates.component';

describe('SchedulesAndRatesComponent', () => {
  let component: SchedulesAndRatesComponent;
  let fixture: ComponentFixture<SchedulesAndRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesAndRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesAndRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
