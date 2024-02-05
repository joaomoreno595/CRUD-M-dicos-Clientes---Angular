export class Medico{
    Id!: number;
    Nome: string;
    CRM: string;
    Especialidade: string;

    public constructor(){
        this.Nome = '';
        this.CRM = '';
        this.Especialidade = '';
    }
}