import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPoliciesComponent } from './payment-policies.component';

describe('PaymentPoliciesComponent', () => {
  let component: PaymentPoliciesComponent;
  let fixture: ComponentFixture<PaymentPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
