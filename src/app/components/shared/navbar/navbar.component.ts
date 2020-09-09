import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscarHeroe(heroePedido:string){
    console.log(heroePedido);
  }

}
