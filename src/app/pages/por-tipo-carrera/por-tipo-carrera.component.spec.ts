import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorTipoCarreraComponent } from './por-tipo-carrera.component';

describe('PorTipoCarreraComponent', () => {
  let component: PorTipoCarreraComponent;
  let fixture: ComponentFixture<PorTipoCarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorTipoCarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorTipoCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
