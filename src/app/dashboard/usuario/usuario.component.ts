import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id:number;
  constructor(private aRoute: ActivatedRoute,
              private UsuarioService: UsuarioService) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario():void{
    this.UsuarioService.getUsuario(this.id).subscribe(data=>{
      console.log(data);
      
    })
  }
}
