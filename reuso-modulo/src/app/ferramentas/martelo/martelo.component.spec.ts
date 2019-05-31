import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarteloComponent } from './martelo.component';

describe('MarteloComponent', () => {
  let component: MarteloComponent;
  let fixture: ComponentFixture<MarteloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarteloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarteloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
