import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  // ARREGLO PROVICIONAL DE PRODUCTOS
  arregloProductos = [
    {
      nombreProducto:"Router Mercusys MW300D",
      precio:34,
      descripcion:"Modem router, color blanco, de 2 antenas mimo 5dbi 300mbps inalámbrico 802.11n y 3 puertos lan. Incluye módem-router, fuente de poder, microfiltro adsl2+, 2 cables telefónicos, 1 cable de red, guía de instalación rápida en español.",
      urlImagenCard:"https://i.ibb.co/WWpGXDr/D-NQ-NP-936658-MLV49527951044-032022-O.webp",
      calificacionProducto:"5",
      idProducto:"BNC737379",
    },
    {
      nombreProducto:"Auriculares Sony WH-CH510",
      precio:49.99,
      descripcion:"Auriculares inalámbricos mediante Bluetooth con micrófono, color negro. Unidad de controlador de 30 milímetros para sonido dinámico. Diseño giratorio para un fácil viaje. Rango efectivo: Línea de visión aprox. 30 pies (32.8 ft). Carga USB tipo C de última generación.",
      urlImagenCard:"https://i.ibb.co/k1YDHDH/Sony-WH-CH510-35-h-de-png.jpg",
      calificacionProducto:"4",
      idProducto:"KLJ466464",
    },
    {
      nombreProducto:"Teclado Y Mouse Lenovo",
      precio:9,
      descripcion:"Teclado y Mouse de Marca Lenovo, modelo Legion Y, con un sensor óptico de  resolución de 1200 dpi. Conector tipo USB ideal para laptos y PC. ",
      urlImagenCard:"https://i.ibb.co/ysPD286/D-NQ-NP-875350-MLV48881804205-012022-F.webp",
      calificacionProducto:"5",
      idProducto:"THJ266226",
    },
    {
      nombreProducto:"Samsung Galaxy Tab S7 FE 2021",
      precio:190.45,
      descripcion:"Tablet con pantalla de 12.4 pulgadas, sistema Android, WiFi 64GB S Pen Incluida Batería de Larga Duración Potente Rendimiento, Negro Místico",
      urlImagenCard:"https://i.ibb.co/MZbFFmz/91pj-ZAMb-EUS-AC-SX355.jpg",
      calificacionProducto:"2",
      idProducto:"JDH373737",
    },
    {
      nombreProducto:"Webcam Logitech C270",
      precio:18,
      descripcion:"Cámara web marca Logitech C270, ideal para una computadora de sobremesa o portátil con HD 720p para videollamadas y grabaciones.",
      urlImagenCard:"https://i.ibb.co/rwYzdqN/61yo4swj-PL-AC-SY355.jpg",
      calificacionProducto:"4",
      idProducto:"HAJA73820",
    },
    {
      nombreProducto:"Monitor Acer SB220Q bi 1920 x 1080",
      precio:110,
      descripcion:"Monitor IPS Ultra delgado de Acer SB220Q bi con una pantalla Full HD de 1920 x 1080, sin marco (puertos HDMI y VGA), color negro.",
      urlImagenCard:"https://i.ibb.co/xfVq8dM/81-Qpk-Ictq-PL-AC-SX300-SY300-QL70-FMwebp.webp",
      calificacionProducto:"4",
      idProducto:"LSKAJ747447",
    },
  ]
}
