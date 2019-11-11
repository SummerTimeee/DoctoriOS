import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneTreatmentsComponent } from './phone-treatments.component';

describe('PhoneTreatmentsComponent', () => {
  let component: PhoneTreatmentsComponent;
  let fixture: ComponentFixture<PhoneTreatmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneTreatmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
