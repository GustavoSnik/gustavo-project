import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroisComponent } from './pages/pages/herois/herois.component';
import { ViloesComponent } from './pages/pages/viloes/viloes.component';
import { IdentidadessecretasComponent } from './pages/pages/identidadessecretas/identidadessecretas.component';

import { AppRoutine } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroisComponent,
    ViloesComponent,
    IdentidadessecretasComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


