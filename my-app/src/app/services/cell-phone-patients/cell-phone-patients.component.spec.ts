import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPhonePatientsComponent } from './cell-phone-patients.component';

describe('CellPhonePatientsComponent', () => {
  let component: CellPhonePatientsComponent;
  let fixture: ComponentFixture<CellPhonePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellPhonePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellPhonePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
