import { Component } from '@angular/core';
import { Cliente } from '../../../models/model.cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.css'
})
export class ClienteEditComponent {
  Cliente:Cliente;

  constructor(private clienteService:ClienteService,
              private activatedRoute:ActivatedRoute,
              private router:Router){
    this.Cliente = new Cliente();

    const id:string|null =this.activatedRoute.snapshot.paramMap.get('id');

    this.clienteService.getById(String(id))
    .pipe(take(1))
    .subscribe({
      next:(jsonCliente:Cliente)=>{this.Cliente=jsonCliente},
      error: erro => console.log(erro)
    });
  }

  alterar():void{
    this.clienteService.put(this.Cliente)
    .pipe(take(1))
    .subscribe({
      next:(jsonCliente:Cliente)=>{this.Cliente=jsonCliente;
      alert("Cliente Alterado Com Suceso");
      this.router.navigate(['cliente']);
    },
    error: erro => console.log(erro)
    });
  }


}
