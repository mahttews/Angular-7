import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveDeFendaComponent } from './chave-de-fenda.component';

describe('ChaveDeFendaComponent', () => {
  let component: ChaveDeFendaComponent;
  let fixture: ComponentFixture<ChaveDeFendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveDeFendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveDeFendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
