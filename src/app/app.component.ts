import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dado';

  valor1 = '';
  valor2 = '';
  valor3 = '';
  resultado = '';

  constructor()
  {
    this.valor1 = this.retornarAleatorio().toString();
    this.valor2 = this.retornarAleatorio().toString();
    this.valor3 = this.retornarAleatorio().toString();
  }

  // tslint:disable-next-line: typedef
  retornarAleatorio()
  {
    return Math.trunc(Math.random() * 6) + 1;
  }

  // tslint:disable-next-line: typedef
  tirar()
  {
    this.valor1 = this.retornarAleatorio().toString();
    this.valor2 = this.retornarAleatorio().toString();
    this.valor3 = this.retornarAleatorio().toString();

    // tslint:disable-next-line: triple-equals
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
    {
      this.resultado = 'Ganó';
    }
    else
    {
      this.resultado = 'Perdió';
    }
  }

}
