import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlicateComponent } from './alicate.component';

describe('AlicateComponent', () => {
  let component: AlicateComponent;
  let fixture: ComponentFixture<AlicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
