import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionColleccionComponent } from './seccion-colleccion.component';

describe('SeccionColleccionComponent', () => {
  let component: SeccionColleccionComponent;
  let fixture: ComponentFixture<SeccionColleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionColleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionColleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
