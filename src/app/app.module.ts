import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MedicoIndexComponent } from './components/medico/medico-index/medico-index.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { MedicoEditComponent } from './components/medico/medico-edit/medico-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { Message404Component } from './components/messages/message-404/message-404.component';
import { FormsModule } from '@angular/forms';
import { ClienteIndexComponent } from './components/cliente/cliente-index/cliente-index.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MedicoIndexComponent,
    MedicoCreateComponent,
    MedicoEditComponent,
    Message404Component,
    ClienteIndexComponent,
    ClienteEditComponent,
    ClienteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
