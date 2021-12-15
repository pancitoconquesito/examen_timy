import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosScreenComponent } from './favoritos-screen.component';

describe('FavoritosScreenComponent', () => {
  let component: FavoritosScreenComponent;
  let fixture: ComponentFixture<FavoritosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
