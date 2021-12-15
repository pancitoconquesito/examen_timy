import { TestBed } from '@angular/core/testing';

import { FavoritoServicioService } from './favorito-servicio.service';

describe('FavoritoServicioService', () => {
  let service: FavoritoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
