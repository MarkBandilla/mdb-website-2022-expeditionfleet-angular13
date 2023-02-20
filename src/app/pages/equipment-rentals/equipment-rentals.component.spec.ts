import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRentalsComponent } from './equipment-rentals.component';

describe('EquipmentRentalsComponent', () => {
  let component: EquipmentRentalsComponent;
  let fixture: ComponentFixture<EquipmentRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentRentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
