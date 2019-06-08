import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'; // permite recibir parametros
@Component({
  selector: 'app-detalle-carrera',
  templateUrl: './detalle-carrera.component.html',
  styleUrls: ['./detalle-carrera.component.css']
})
export class DetalleCarreraComponent implements OnInit {

  Carrer: {id: number , name: string, codeCarrer: string }; // WHERE
  constructor( private routeAct: ActivatedRoute) { }

  ngOnInit() {
      this.Carrer = {
        id: this.routeAct.snapshot.params.id,
        name: this.routeAct.snapshot.params.name,
        codeCarrer: 'a'
      };
      this.routeAct.params.subscribe(
        (params: Params) => {
          this.Carrer.id = params.id;
          this.Carrer.name = params.name;
          console.log(this.Carrer);
    });
  }


  // determinar si la carrera es de formacion dual //actiuvar un boolean para mostrarr un caudro mas en el frontend
}
