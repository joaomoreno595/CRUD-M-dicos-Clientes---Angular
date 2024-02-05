import { Component } from '@angular/core';
import { MedicoService } from '../../../services/medico/medico.service';
import { take } from 'rxjs';
import { Medico } from '../../../models/model.medico';

@Component({
  selector: 'app-medico-index',
  templateUrl: './medico-index.component.html',
  styleUrl: './medico-index.component.css'
})
export class MedicoIndexComponent {

  Medicos: Medico[];

  constructor(private medicoService: MedicoService){
    this.Medicos = [];
  }

  pesquisar(){    
    this.medicoService.get()
      .pipe(take(1))
      .subscribe({
        next: (jsonMedicos:Medico[]) => {this.Medicos = jsonMedicos},
        error: erro => console.log(erro)
      });
  }

  desejaExcluir(id: number, nome:string){
    if (confirm(`Deseja excluir o médico ${nome}?`))
        this.excluir(id);
  }

  excluir(id:number){    
    this.medicoService.delete(id)
      .pipe(take(1))
      .subscribe({
        next: () => {alert('Excluido com sucesso!'); this.pesquisar();},
        error: erro => console.log(erro)
      });
  }
}
