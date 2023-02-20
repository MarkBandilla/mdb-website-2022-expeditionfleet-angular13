import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoSchedulesAndRatesComponent } from './apo-schedules-and-rates.component';

describe('ApoSchedulesAndRatesComponent', () => {
  let component: ApoSchedulesAndRatesComponent;
  let fixture: ComponentFixture<ApoSchedulesAndRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoSchedulesAndRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoSchedulesAndRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
