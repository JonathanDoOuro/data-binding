import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit{
  
  @Input("nome") nomeCurso: string = ''; //expoẽ a propriedade para o <app-curso>
  
  
  constructor() {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
