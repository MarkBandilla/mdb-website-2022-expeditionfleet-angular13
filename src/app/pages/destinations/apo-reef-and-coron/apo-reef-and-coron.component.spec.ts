import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoReefAndCoronComponent } from './apo-reef-and-coron.component';

describe('ApoReefAndCoronComponent', () => {
  let component: ApoReefAndCoronComponent;
  let fixture: ComponentFixture<ApoReefAndCoronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoReefAndCoronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoReefAndCoronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
