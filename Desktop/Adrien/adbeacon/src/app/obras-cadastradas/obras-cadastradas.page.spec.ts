import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasCadastradasPage } from './obras-cadastradas.page';

describe('ObrasCadastradasPage', () => {
  let component: ObrasCadastradasPage;
  let fixture: ComponentFixture<ObrasCadastradasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasCadastradasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasCadastradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
