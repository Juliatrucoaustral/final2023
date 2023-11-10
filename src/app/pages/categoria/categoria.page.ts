import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from 'src/app/core/interface/constants/cotagoria';
import {ActivatedRoute} from '@angular/router';





@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute
    ) { 
      activatedRoute.params.subscribe(params => {
        console.log(params)
        if(params['id']){
          const categoriaEncontrada = CATEGORIA.find (categoria => categoria.id == params['id']);
          if(categoriaEncontrada) {
            this.categoriaActual = categoriaEncontrada;
          }
        }

      })
    }

  ngOnInit() {
  }

  categoriaActual=CATEGORIA[0];
}
