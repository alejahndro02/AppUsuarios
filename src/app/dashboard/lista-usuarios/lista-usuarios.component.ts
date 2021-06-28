import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listUsuarios: any[]=[];

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios()
  }
getUsuarios(){
  this.usuarioService.getUsuarios().subscribe(data => {
    console.log(data);
    this.listUsuarios = data.data
    
  })
}
}
