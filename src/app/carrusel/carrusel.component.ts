import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor( private configCarrusel:NgbCarouselConfig ) {
    // SE HACEN LA PERSONALIZACIÓN DEL CARRUSEL
    configCarrusel.showNavigationArrows = false;
    configCarrusel.pauseOnHover = true;
    configCarrusel.interval = 5000;
  }

  ngOnInit(): void {
  }

  // ARREGLO PROVICIONAL DE IMAGENES
  carruselImages = [
    {
      url:"https://i.ibb.co/sgv00j3/14.png",
      alt:"imagenSlider"
    },
    {
      url:"https://i.ibb.co/FJdPYLq/promociones-1024x626.webp",
      alt:"imagenSlider"
    },
    {
      url:"https://i.ibb.co/9qvbj2n/speech-bubble-shaped-yellow.jpg",
      alt:"imagenSlider"
    }
  ]


}
