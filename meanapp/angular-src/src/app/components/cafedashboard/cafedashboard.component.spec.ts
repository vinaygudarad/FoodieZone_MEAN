import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafedashboardComponent } from './cafedashboard.component';

describe('CafedashboardComponent', () => {
  let component: CafedashboardComponent;
  let fixture: ComponentFixture<CafedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
