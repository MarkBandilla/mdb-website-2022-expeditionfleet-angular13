import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoRouteAndItineraryComponent } from './apo-route-and-itinerary.component';

describe('ApoRouteAndItineraryComponent', () => {
  let component: ApoRouteAndItineraryComponent;
  let fixture: ComponentFixture<ApoRouteAndItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoRouteAndItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoRouteAndItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
