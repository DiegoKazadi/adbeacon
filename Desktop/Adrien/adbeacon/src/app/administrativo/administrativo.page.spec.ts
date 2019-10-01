import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativoPage } from './administrativo.page';

describe('AdministrativoPage', () => {
  let component: AdministrativoPage;
  let fixture: ComponentFixture<AdministrativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
