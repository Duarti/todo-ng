import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {MenuComponent} from './components/menu/menu.component';
import {LoginComponent} from './components/login/login.component';
import {NotaService} from './services/nota.service';
import {NotaComponent} from './components/nota/nota.component';
import {HttpClientModule} from '@angular/common/http';
import {FlashMessageComponent} from './components/flash-message/flash-message.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    NotaComponent,
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NotaService],
  bootstrap: [AppComponent],
  exports: [InicioComponent, FlashMessageComponent]
})
export class AppModule {
}
