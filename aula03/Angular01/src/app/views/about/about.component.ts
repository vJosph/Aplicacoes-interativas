import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  sobre = 'Sobre a aplicação';
  ngOnInit(): void {
  }

  dizerOi(): void {
    alert('Alo Boizao');
  }
  somar(): void {
    alert('Diga dois numeros para somar');
    const Num1: number = parseFloat(prompt('Digite o primeiro numero'));
    const Num2: number = parseFloat(prompt('Digite o segundo numero'));
    const soma = Num1 + Num2;
    alert('Resultado é :' + soma);
  }
}
