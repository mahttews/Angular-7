import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeBriquedosComponent } from './caixa-de-briquedos.component';

describe('CaixaDeBriquedosComponent', () => {
  let component: CaixaDeBriquedosComponent;
  let fixture: ComponentFixture<CaixaDeBriquedosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDeBriquedosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeBriquedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
