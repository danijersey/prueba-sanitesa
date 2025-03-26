import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCurrency: string = 'ES-€'; 
  menuActive: boolean = false;
  numero:number=1
  
  disminuirNumero(){
    if(this.numero>1){
    this.numero=this.numero-1
  }
  }

  aumentarNumero(){
    if(this.numero<10){
    this.numero=this.numero+1
  }
  }

  // Función que cambia el estado del menú
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

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
