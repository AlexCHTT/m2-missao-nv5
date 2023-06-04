import  Editora from "../modelo/Editora";

//Dados https://www.livrobingo.com.br/conheca-quais-sao-as-maiores-editoras-do-brasil

var editoras: Array<Editora> =[
    {
        nomeEditora : "Aleph",
        codEditora : 1
    },
    {
        nomeEditora : "Suma",
        codEditora : 2
    },
    {
        nomeEditora : "Leya",
        codEditora : 3
    }
];

export default class ControleEditora {
    editoras = editoras;
    getNomeEditora(codigoEditora:number){
        let editora: Editora[]  = this.editoras.filter((editora:Editora)=>{
          return editora.codEditora === codigoEditora
        })
        return editora[0].nomeEditora;
      }; 
      
      getEditoras(){
        return this.editoras
      }
}