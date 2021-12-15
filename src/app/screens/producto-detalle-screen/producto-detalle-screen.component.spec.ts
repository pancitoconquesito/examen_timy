import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleScreenComponent } from './producto-detalle-screen.component';

describe('ProductoDetalleScreenComponent', () => {
  let component: ProductoDetalleScreenComponent;
  let fixture: ComponentFixture<ProductoDetalleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDetalleScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
