import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicoIndexComponent } from './components/medico/medico-index/medico-index.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { MedicoEditComponent } from './components/medico/medico-edit/medico-edit.component';
import { Message404Component } from './components/messages/message-404/message-404.component';
import { ClienteIndexComponent } from './components/cliente/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'medico',component:MedicoIndexComponent},
  {path:'medico/create',component:MedicoCreateComponent},
  {path:'medico/edit/:id',component:MedicoEditComponent},
  {path:'cliente',component:ClienteIndexComponent},
  {path:'cliente/create', component:ClienteCreateComponent},
  {path:'cliente/edit/:id', component:ClienteEditComponent},
  {path:'**', component: Message404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
