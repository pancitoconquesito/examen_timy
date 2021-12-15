import { TestBed } from '@angular/core/testing';

import { CarritoServicioService } from './carrito-servicio.service';

describe('CarritoServicioService', () => {
  let service: CarritoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
