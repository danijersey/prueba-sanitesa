import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorComponent } from '../components/menu-superior/menu-superior.component';
import { SeccionVideoComponent } from '../components/seccion-video/seccion-video.component';
import { SeccionEstanciasComponent } from '../components/seccion-estancias/seccion-estancias.component';
import { SeccionCaratulasComponent } from '../components/seccion-caratulas/seccion-caratulas.component';
import { SeccionExploraComponent } from '../components/seccion-explora/seccion-explora.component';
import { SeccionColleccionComponent } from '../components/seccion-colleccion/seccion-colleccion.component';
import { SeccionTestimoniosComponent } from '../components/seccion-testimonios/seccion-testimonios.component';
import { SeccionPropietariosComponent } from '../components/seccion-propietarios/seccion-propietarios.component';
import { SeccionHeroComponent } from '../components/seccion-hero/seccion-hero.component';
import { SeccionFooterComponent } from '../components/seccion-footer/seccion-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,MenuSuperiorComponent,SeccionVideoComponent,SeccionEstanciasComponent,
    SeccionCaratulasComponent,SeccionExploraComponent,SeccionColleccionComponent,SeccionTestimoniosComponent,
    SeccionPropietariosComponent,SeccionHeroComponent,SeccionFooterComponent
  ],
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
