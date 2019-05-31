import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonecaComponent } from './boneca.component';

describe('BonecaComponent', () => {
  let component: BonecaComponent;
  let fixture: ComponentFixture<BonecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
