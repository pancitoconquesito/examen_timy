import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoScreenComponent } from './carrito-screen.component';

describe('CarritoScreenComponent', () => {
  let component: CarritoScreenComponent;
  let fixture: ComponentFixture<CarritoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
