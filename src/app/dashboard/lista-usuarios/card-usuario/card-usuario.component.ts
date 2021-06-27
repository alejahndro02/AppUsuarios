import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  imgUrl = 'https://cdn.pixabay.com/photo/2020/06/01/10/02/puffin-5246026_960_720.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
