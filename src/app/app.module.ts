import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {ContatoModule} from "./contato/contato.module";
import {NossaVisaoModule} from "./nossa-visao/nossa-visao.module";
import {QuemSomosModule} from "./quem-somos/quem-somos.module";
import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
