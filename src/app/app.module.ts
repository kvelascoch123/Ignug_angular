import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PorTipoCarreraComponent } from './pages/por-tipo-carrera/por-tipo-carrera.component';

import { FormsModule } from '@angular/forms';
import { DetalleCarreraComponent } from './pages/detalle-carrera/detalle-carrera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    PorTipoCarreraComponent,
    DetalleCarreraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
