import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsAndPartnersComponent } from './agents-and-partners.component';

describe('AgentsAndPartnersComponent', () => {
  let component: AgentsAndPartnersComponent;
  let fixture: ComponentFixture<AgentsAndPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsAndPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsAndPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
