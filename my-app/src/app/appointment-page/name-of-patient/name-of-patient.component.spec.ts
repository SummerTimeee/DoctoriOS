import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameOfPatientComponent } from './name-of-patient.component';

describe('NameOfPatientComponent', () => {
  let component: NameOfPatientComponent;
  let fixture: ComponentFixture<NameOfPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameOfPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameOfPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
