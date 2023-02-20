import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSchedulesAndRatesComponent } from './page-schedules-and-rates.component';

describe('PageSchedulesAndRatesComponent', () => {
  let component: PageSchedulesAndRatesComponent;
  let fixture: ComponentFixture<PageSchedulesAndRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSchedulesAndRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSchedulesAndRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
