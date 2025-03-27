import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-video',
  standalone: true,
  imports: [],
  templateUrl: './seccion-video.component.html',
  styleUrl: './seccion-video.component.css'
})
export class SeccionVideoComponent {
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
}
