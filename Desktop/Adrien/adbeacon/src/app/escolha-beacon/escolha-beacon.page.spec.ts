import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaBeaconPage } from './escolha-beacon.page';

describe('EscolhaBeaconPage', () => {
  let component: EscolhaBeaconPage;
  let fixture: ComponentFixture<EscolhaBeaconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaBeaconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaBeaconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
