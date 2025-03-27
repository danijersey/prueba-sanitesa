import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seccion-estancias',
  standalone: true,
  imports: [],
  templateUrl: './seccion-estancias.component.html',
  styleUrl: './seccion-estancias.component.css'
})
export class SeccionEstanciasComponent {

  @ViewChild('carousel') carousel!: ElementRef;
  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -600,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 6000, // Aumenté de 3000 a 6000 (el doble de desplazamiento)
      behavior: 'smooth'
    });
  }
}
