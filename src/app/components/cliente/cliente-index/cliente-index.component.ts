import { Component } from '@angular/core';
import { Cliente } from '../../../models/model.cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrl: './cliente-index.component.css'
})
export class ClienteIndexComponent {

    Clientes:Cliente[];
    id:string;

    
    constructor(private clienteService :ClienteService){
      this.Clientes = [];
      this.id = ''; 
    }

    Pesquisar(){
      if(this.id === '' || this.id === null)
        this.PesquisarTodos();
      else
        this.PesquisarPorId(this.id);
    }
    PesquisarTodos(){
      this.clienteService.get()
      .pipe(take(1))
      .subscribe({
        next:(JsonClientes:Cliente[])=>{this.Clientes=JsonClientes},
        error:erro=>console.log(erro)
      })
      }

      PesquisarPorId(id:string){
        this.clienteService.getById(id)
        .pipe(take(1))
        .subscribe({
         next:(JsonCliente:Cliente)=>{
          this.Clientes=JsonCliente?[JsonCliente]:[]},
       })
    }

    desejaExcluir(id:string,nome:string){
        if(confirm(`Deseja Excluir Cliente ${nome} ?`))
          this.excluir(id);
    }
        excluir(id:string){
          this.clienteService.delete(id)
          .pipe(take(1))
          .subscribe({
            next:()=>{alert("Excluido Com Sucesso "); this.Pesquisar();},
            error: erro => console.log(erro)
          });
        }
    
}
