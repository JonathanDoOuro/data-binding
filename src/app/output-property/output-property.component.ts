import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit{
  ngOnInit(): void {
    
  }

  constructor() {

  }

  @Output() mudouValor = new EventEmitter(); //evento que pode ser capturado por (mudouValor)

  @Input() valor: number = 0;

  @ViewChild('campoInput', {static: false}) campoValorInput: ElementRef | undefined;

  incrementa() {
    this.valor += 1;
    console.log(this.campoValorInput?.nativeElement.value);
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor -=1;
  }

}
