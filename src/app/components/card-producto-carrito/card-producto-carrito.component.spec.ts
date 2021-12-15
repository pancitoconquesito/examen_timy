import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductoCarritoComponent } from './card-producto-carrito.component';

describe('CardProductoCarritoComponent', () => {
  let component: CardProductoCarritoComponent;
  let fixture: ComponentFixture<CardProductoCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductoCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
