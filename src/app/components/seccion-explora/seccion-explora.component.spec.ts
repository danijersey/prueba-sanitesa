import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionExploraComponent } from './seccion-explora.component';

describe('SeccionExploraComponent', () => {
  let component: SeccionExploraComponent;
  let fixture: ComponentFixture<SeccionExploraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionExploraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionExploraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
