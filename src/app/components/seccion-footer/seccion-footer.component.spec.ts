import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFooterComponent } from './seccion-footer.component';

describe('SeccionFooterComponent', () => {
  let component: SeccionFooterComponent;
  let fixture: ComponentFixture<SeccionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
