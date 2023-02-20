import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubbatahaComponent } from './tubbataha.component';

describe('TubbatahaComponent', () => {
  let component: TubbatahaComponent;
  let fixture: ComponentFixture<TubbatahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TubbatahaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TubbatahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
