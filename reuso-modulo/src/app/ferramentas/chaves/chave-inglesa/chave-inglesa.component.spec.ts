import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveInglesaComponent } from './chave-inglesa.component';

describe('ChaveInglesaComponent', () => {
  let component: ChaveInglesaComponent;
  let fixture: ComponentFixture<ChaveInglesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveInglesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveInglesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
