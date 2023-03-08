import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
  
  url: String = "http:/loiane.com"
  urlImage = "https://picsum.photos/500/300"

  valorAtual: string = '';
  valorSalvo: string = '';
  nomeDoCurso: string = 'angular 14';

  isMouseOver: boolean = false;
  valorIncial: number = 15;

  input(e: InputEvent) {
    console.log(e.data)
  }

  onMudouValor(event: any) {
    console.log(event);
  }

  botao(): void {
    alert('teste')
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor
  }

  keyUp(e: KeyboardEvent) {
    console.log(e)
    this.valorAtual = (<HTMLInputElement>e.target).value
  }

  onMouserOverOut() {
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }
  
  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}

