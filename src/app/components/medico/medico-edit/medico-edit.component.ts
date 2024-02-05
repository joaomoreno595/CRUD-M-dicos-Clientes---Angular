import { Component } from '@angular/core';
import { Medico } from '../../../models/model.medico';
import { MedicoService } from '../../../services/medico/medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-medico-edit',
  templateUrl: './medico-edit.component.html',
  styleUrl: './medico-edit.component.css'
})
export class MedicoEditComponent {

  Medico: Medico;
  
  constructor(private medicoService: MedicoService,
              private activatedRoute: ActivatedRoute,
              private router: Router){              
    
    this.Medico = new Medico();

    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.medicoService.getById(Number(id))
    .pipe(take(1))
    .subscribe({
      next: (jsonMedico:Medico) => {this.Medico = jsonMedico},
      error: erro => console.log(erro)
    });

    
  }

  alterar(): void{
    this.medicoService.put(this.Medico)
    .pipe(take(1))
    .subscribe({
      next: (jsonMedico:Medico) => {
        this.Medico = jsonMedico; 
        alert("Médico alterado com sucesso");
        this.router.navigate(['medico']);
      },
      error: erro => console.log(erro)
    });
  }


}
