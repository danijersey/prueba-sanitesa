import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEstanciasComponent } from './seccion-estancias.component';

describe('SeccionEstanciasComponent', () => {
  let component: SeccionEstanciasComponent;
  let fixture: ComponentFixture<SeccionEstanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionEstanciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
