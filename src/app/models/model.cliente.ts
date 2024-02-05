export class Cliente{
    Id!:string;
    Nome:string;
    DataNascimento!:Date;

    public constructor(){
        this.Nome = '';
    }

}