import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveMapsComponent } from './dive-maps.component';

describe('DiveMapsComponent', () => {
  let component: DiveMapsComponent;
  let fixture: ComponentFixture<DiveMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiveMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
