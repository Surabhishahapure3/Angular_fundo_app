import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContaineerComponent } from './dashboard-containeer.component';

describe('DashboardContaineerComponent', () => {
  let component: DashboardContaineerComponent;
  let fixture: ComponentFixture<DashboardContaineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardContaineerComponent]
    });
    fixture = TestBed.createComponent(DashboardContaineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
