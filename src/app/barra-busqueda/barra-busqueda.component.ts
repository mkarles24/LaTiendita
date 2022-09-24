import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  constructor(private formBuild: FormBuilder) { }

  public formSearch!: FormGroup;


  ngOnInit(): void {
    this.formSearch = this.formBuild.group({
      search: ['']
    })
  }
  
  // UN METODO PROVICIONAL PARA LA OPCION DE BUSQUEDAD
  enviarDatos(): any {
    console.log(this.formSearch.value)
  }


}
