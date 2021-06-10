import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerydashboardComponent } from './bakerydashboard.component';

describe('BakerydashboardComponent', () => {
  let component: BakerydashboardComponent;
  let fixture: ComponentFixture<BakerydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
