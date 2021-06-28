import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listUsuarios: any[]=[];
  loading = true;

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios()
  }
getUsuarios():void{
  this.usuarioService.getUsuarios().subscribe(data => {
    this.listUsuarios = data.data
  this.loading = false;
  })
}
}
