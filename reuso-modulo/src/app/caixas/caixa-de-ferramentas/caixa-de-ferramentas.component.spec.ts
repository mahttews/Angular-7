import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeFerramentasComponent } from './caixa-de-ferramentas.component';

describe('CaixaDeFerramentasComponent', () => {
  let component: CaixaDeFerramentasComponent;
  let fixture: ComponentFixture<CaixaDeFerramentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDeFerramentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
