import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFleetDetailsComponent } from './our-fleet-details.component';

describe('OurFleetDetailsComponent', () => {
  let component: OurFleetDetailsComponent;
  let fixture: ComponentFixture<OurFleetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFleetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFleetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
