import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSaboresDetailsComponent } from './pizzasabores-details.component';

describe('PizzaSaboresDetailsComponent', () => {
  let component: PizzaSaboresDetailsComponent;
  let fixture: ComponentFixture<PizzaSaboresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSaboresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSaboresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
