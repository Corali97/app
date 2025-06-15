import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaPage } from './meta.page';

describe('MetaPage', () => {
  let component: MetaPage;
  let fixture: ComponentFixture<MetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
