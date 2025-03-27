import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCaratulasComponent } from './seccion-caratulas.component';

describe('SeccionCaratulasComponent', () => {
  let component: SeccionCaratulasComponent;
  let fixture: ComponentFixture<SeccionCaratulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionCaratulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCaratulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
