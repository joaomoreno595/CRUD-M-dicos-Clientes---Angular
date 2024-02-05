import { Component } from '@angular/core';
import { Cliente } from '../../../models/model.cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent {

  Cliente:Cliente;

  constructor(private clienteService:ClienteService,
              private router:Router){
     this.Cliente = new Cliente(); 
  }

  incluir(){
    this.clienteService.post(this.Cliente)
    .pipe(take(1))
    .subscribe({
      next:(jsonCliente:Cliente)=>{
        this.Cliente = jsonCliente;
        alert("Cliente Cadastrado com Sucesso!!!");
        this.router.navigate(['cliente']);
      },
      error: erro => console.log(erro)
    })
  }
}
