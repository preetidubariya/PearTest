import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsOneComponent } from './meals-one.component';

describe('MealsOneComponent', () => {
  let component: MealsOneComponent;
  let fixture: ComponentFixture<MealsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
