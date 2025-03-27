import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPropietariosComponent } from './seccion-propietarios.component';

describe('SeccionPropietariosComponent', () => {
  let component: SeccionPropietariosComponent;
  let fixture: ComponentFixture<SeccionPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionPropietariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
