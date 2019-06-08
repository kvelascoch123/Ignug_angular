import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-por-tipo-carrera',
  templateUrl: './por-tipo-carrera.component.html',
  styleUrls: ['./por-tipo-carrera.component.css']
})
export class PorTipoCarreraComponent implements OnInit {
   showdetalleCarrera = true;  // listado de materias

  // Todas las carreras
  carrer = [
    // tslint:disable-next-line:max-line-length
    {id: 0, name: 'Arte Culinario Ecuatoriano', description: 'Carrera enfocada al arte culinario de platos tipicos del ecuador', img: 'https://yavirac.edu.ec/web/wp-content/uploads/2019/03/arte-culinario-267x300.jpg' },
        // tslint:disable-next-line:max-line-length
    {id: 2, name: 'Desarrollo de Software', description: 'Carrera formacion dual', img: 'https://yavirac.edu.ec/web/wp-content/uploads/2019/03/desarrollo-267x300.jpg'},
    // tslint:disable-next-line:max-line-length
    {id: 3, name: 'Diseño de modas', description: 'Diseño de modas', img: 'https://yavirac.edu.ec/web/wp-content/uploads/2019/03/modas-267x300.jpg'},
    // tslint:disable-next-line:max-line-length
    {id: 4, name: 'Guía Nacinal de Turismo', description: 'Guia en ecuador', img: 'https://yavirac.edu.ec/web/wp-content/uploads/2019/03/g-turismo-267x300.jpg'},
    // tslint:disable-next-line:max-line-length
    {id: 5, name: 'Marketing', description: 'Carrera practica', img: 'https://yavirac.edu.ec/web/wp-content/uploads/2019/03/mk-267x300.jpg'}
];
  constructor(private router: Router) {
   }
  ngOnInit() {
  }

  // Abirr detalles de la carrera
  open( carrer) {
    // permite abrir ventana y cerrar la anterior
    this.showdetalleCarrera = false;
    if (this.showdetalleCarrera) {
      // permanece en vista
    } else {
      this.router.navigate(['/detalleCarrera', carrer.name]);
      console.log(carrer);
    }
  }


}
