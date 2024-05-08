import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Matches2Page } from './matches2.page';

describe('Matches2Page', () => {
  let component: Matches2Page;
  let fixture: ComponentFixture<Matches2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Matches2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
