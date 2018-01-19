import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() atualizacao;
  @Input() atualizar;
  @Input() busca;
  textBusca = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  buscar() {
    this.busca.text = this.textBusca;
    this.atualizar();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
