import {Component, Input, OnInit} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {NotaService} from '../../services/nota.service';
import {Nota} from '../../models/nota';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  directives: [MenuComponent]
})
export class InicioComponent implements OnInit {

  notas: Nota[];

  constructor(private notaService: NotaService) {
  }

  ngOnInit() {
    this.notaService.get()
      .subscribe(data => {
        this.notas = data;
      });
  }

}
