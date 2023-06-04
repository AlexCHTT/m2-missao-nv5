import { Injectable } from '@angular/core';
import { Livro } from './Livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros : Array<Livro> =[
    {
      codigo:1,
      codEditora: 1,
      titulo: 'O poder do hábito',
      resumo: 'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida.',
      autores:[' Charles Duhigg', ' Rafael Mantovani']
    },
    {
      codigo:2,
      codEditora: 2,
      titulo: 'Do Mil ao Milhão',
      resumo: 'Criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira',
      autores:['Thiago Nigro']
    },
    {
      codigo:3,
      codEditora: 3,
      titulo: 'O Menino Maluquinho',
      resumo: 'Um menininho traquinas, diziam. Tinha macaquinhos no sótão, deitava e rolava, fazendo confusão.',
      autores: ['Ziraldo Alves Pinto', 'Ziraldo']
    },
  ]

  constructor() { }
  obterLivro(){
    return this.livros
  }
  adicionar(livro:Livro){
    try{
      var codigo:number =(this.livros.length -1);
      livro.codigo = this.livros[codigo].codigo + 1;
      this.livros.push(livro);
  }
    catch{
      livro.codigo = 1;
      this.livros.push(livro);
    }
  }
  excluir(num:number){
      var livroEncontrado = this.livros.findIndex((livro:Livro)=>{
        return num == livro.codigo
      });
      this.livros.splice(livroEncontrado, 1)
  }
}

