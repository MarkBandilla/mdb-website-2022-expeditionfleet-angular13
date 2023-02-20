import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScubaCoursesComponent } from './scuba-courses.component';

describe('ScubaCoursesComponent', () => {
  let component: ScubaCoursesComponent;
  let fixture: ComponentFixture<ScubaCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScubaCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScubaCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
