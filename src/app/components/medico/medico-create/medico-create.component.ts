import { Component } from '@angular/core';
import { MedicoService } from '../../../services/medico/medico.service';
import { Medico } from '../../../models/model.medico';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrl: './medico-create.component.css'
})
export class MedicoCreateComponent {

  Medico: Medico;
  
  constructor(private medicoService: MedicoService,
              private router: Router){
    this.Medico = new Medico();
  }

  incluir(){
    this.medicoService.post(this.Medico)
      .pipe(take(1))
      .subscribe({
        next: (jsonMedico:Medico) => {
          this.Medico = jsonMedico; 
          alert("Médico cadastrado com sucesso");
          this.router.navigate(['medico']);
        },
        error: erro => console.log(erro)
      });
  }
}
