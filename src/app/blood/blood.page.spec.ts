import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloodPage } from './blood.page';

describe('BloodPage', () => {
  let component: BloodPage;
  let fixture: ComponentFixture<BloodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
