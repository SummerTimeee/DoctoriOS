import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPhonePatientsHeaderComponent } from './cell-phone-patients-header.component';

describe('CellPhonePatientsHeaderComponent', () => {
  let component: CellPhonePatientsHeaderComponent;
  let fixture: ComponentFixture<CellPhonePatientsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellPhonePatientsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellPhonePatientsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
