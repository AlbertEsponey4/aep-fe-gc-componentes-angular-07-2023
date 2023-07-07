import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaUsers = [
    {id: 0, nombre: "Ejemplo", CIF: "1234134J", direccion: "Avenida 4, 33", grupo: 3},
  ];
  idIncremental: number = 1;
  
  nuevoUsuario: {
    id: number;
    nombre: string;
    CIF: string;
    direccion: string;
    grupo: number;
  } = {
    id: 0,
    nombre: "",
    CIF: "",
    direccion: "",
    grupo: 0,
  }

  grupos: {value: number, label: string }[] = [
    {value: 1, label: 'Grupo 1'},
    {value: 2, label: 'Grupo 2'},
    {value: 3, label: 'Grupo 3'}
  ];

  selectedGrupo: number | null = null;

  addUser() {
    if (this.selectedGrupo != null){
      this.nuevoUsuario.grupo = this.selectedGrupo;
    } else {
      console.log("Hay que seleccionar grupo");
      return;
    }

    this.nuevoUsuario.id = this.idIncremental++;
    this.listaUsers.push(this.nuevoUsuario);
    this.nuevoUsuario = {
      id: 0,
      nombre: "",
      CIF: "",
      direccion: "",
      grupo: this.selectedGrupo
    };
  }

  deleteUser(){

  }
}
