import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaBaguncadaComponent } from './caixa-baguncada.component';

describe('CaixaBaguncadaComponent', () => {
  let component: CaixaBaguncadaComponent;
  let fixture: ComponentFixture<CaixaBaguncadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaBaguncadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaBaguncadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
