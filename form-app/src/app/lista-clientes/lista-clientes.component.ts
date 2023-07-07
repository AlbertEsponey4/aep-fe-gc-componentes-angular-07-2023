import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  @Input() datos: any

  constructor(){ }
  
  
  deleteUser(user: any){
    
  }
}

