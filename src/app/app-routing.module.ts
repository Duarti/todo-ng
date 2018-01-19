import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {NaoEncontradaComponent} from './components/nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
