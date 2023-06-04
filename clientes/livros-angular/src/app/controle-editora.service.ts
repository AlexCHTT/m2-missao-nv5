import { Injectable } from '@angular/core';
import { Editora } from './Editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  
  editoras: Array<Editora> = [
   {
    nome :'Suma',
    codEditora: 1
  },
    {
     nome :'Editora Rocco',
     codEditora: 2
   },
    {
     nome :'Aleph',
     codEditora: 3
   },
  ]

  getNomeEditora(codigoEditora:number){
    let editora: Editora[]  = this.editoras.filter((editora:Editora)=>{
      return editora.codEditora == codigoEditora
    })
    return editora[0].nome;
  }; 
  
  getEditoras(){
    return this.editoras
  }
}
