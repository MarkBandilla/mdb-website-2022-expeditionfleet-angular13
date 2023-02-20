import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAndItineraryComponent } from './route-and-itinerary.component';

describe('RouteAndItineraryComponent', () => {
  let component: RouteAndItineraryComponent;
  let fixture: ComponentFixture<RouteAndItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAndItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAndItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
