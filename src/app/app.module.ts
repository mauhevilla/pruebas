import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { P1Component } from './pruebas/p1/p1.component';
import { P2Component } from './pruebas/p2/p2.component';
import { P3Component } from './pruebas/p3/p3.component';
import { DadosComponent } from './pruebas/dados/dados.component';
import { DadoComponent } from './pruebas/dados/dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component,
    P3Component,
    DadosComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
