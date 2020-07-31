import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSaboresListComponent } from './pizzasabores-list.component';

describe('PizzaSaboresListComponent', () => {
  let component: PizzaSaboresListComponent;
  let fixture: ComponentFixture<PizzaSaboresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSaboresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSaboresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
