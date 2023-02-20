import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoFaqComponent } from './faq.component';

describe('ApoFaqComponent', () => {
  let component: ApoFaqComponent;
  let fixture: ComponentFixture<ApoFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
