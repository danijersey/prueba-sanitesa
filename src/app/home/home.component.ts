
import { Component, } from '@angular/core';
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
  imports: [MenuSuperiorComponent,SeccionVideoComponent,SeccionEstanciasComponent,
    SeccionCaratulasComponent,SeccionExploraComponent,SeccionColleccionComponent,SeccionTestimoniosComponent,
    SeccionPropietariosComponent,SeccionHeroComponent,SeccionFooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
