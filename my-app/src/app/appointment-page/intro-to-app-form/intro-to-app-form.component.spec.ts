import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToAppFormComponent } from './intro-to-app-form.component';

describe('IntroToAppFormComponent', () => {
  let component: IntroToAppFormComponent;
  let fixture: ComponentFixture<IntroToAppFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToAppFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
