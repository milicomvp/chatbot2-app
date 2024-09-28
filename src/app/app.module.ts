import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotService } from './chatbot.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HistorialComponent } from './historial/historial.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    InicioComponent,
    PerfilComponent,
    HistorialComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
