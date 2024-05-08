import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Requests2Page } from './requests2.page';

describe('Requests2Page', () => {
  let component: Requests2Page;
  let fixture: ComponentFixture<Requests2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Requests2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
