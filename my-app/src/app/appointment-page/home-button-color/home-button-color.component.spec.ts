import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonColorComponent } from './home-button-color.component';

describe('HomeButtonColorComponent', () => {
  let component: HomeButtonColorComponent;
  let fixture: ComponentFixture<HomeButtonColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeButtonColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
