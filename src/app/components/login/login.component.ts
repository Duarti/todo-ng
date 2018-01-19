import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {AuthService} from '../../services/auth.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  error = {
    usuario: '',
    senha: ''
  };

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuario.usuario = '';
    this.usuario.senha = '';
  }

  logar() {
    let error = false;
    if (!this.usuario.usuario) {
      this.error.usuario = '"Usuário" não pode ficar em branco';
      error = true;
    }
    if (!this.usuario.senha) {
      this.error.senha = '"Senha" não pode ficar em branco';
      error = true;
    }
    if (!error) {
      this.auth.login(this.usuario)
        .subscribe(
          (res) => {
            let u = JSON.parse(res.body);
            this.auth.setToken(u.token);
            this.router.navigate(['']);
          },
          (err) => {
            err.error.forEach((error, index) => {
              this.error[error.field] = error.message;
            });
          });
    }
  }

}
