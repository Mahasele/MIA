import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRequestsPage } from './view-requests.page';

describe('ViewRequestsPage', () => {
  let component: ViewRequestsPage;
  let fixture: ComponentFixture<ViewRequestsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
