import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  contador2 = 0;
  contador3 = 0;
  contador5 = 0;
  contador7 = 0;
  contador10 = 0;

  primos: number[] = [];
  mostrarPrimos = false;

  constructor() {}

  incrementar(multiplo: number) {
    if (multiplo === 2) this.contador2 += 2;
    else if (multiplo === 3) this.contador3 += 3;
    else if (multiplo === 5) this.contador5 += 5;
    else if (multiplo === 7) this.contador7 += 7;
    else if (multiplo === 10) this.contador10 += 10;
  }

  generarPrimos() {
    this.primos = [];
    let n = 2;
    while (this.primos.length < 25) {
      if (this.esPrimo(n)) {
        this.primos.push(n);
      }
      n++;
    }
    this.mostrarPrimos = true;
  }

  esPrimo(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
