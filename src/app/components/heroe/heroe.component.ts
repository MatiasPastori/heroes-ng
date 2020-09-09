import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {
    //
    this.activatedRoute.params.subscribe((params) => {
      // Este id esta apareciendo por que la ruta que nosotros definimos en el app.routes es /heroes:id
      this.heroe = this.heroeService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {}
}
