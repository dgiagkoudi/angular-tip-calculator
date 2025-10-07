import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipCalculatorService {

  calculateTipPerPerson(bill: number, tipPercent: number, people: number): number {
    return (bill * (tipPercent / 100)) / people;
  }

  calculateTotalPerPerson(bill: number, tipPercent: number, people: number): number {
    return (bill * (1 + tipPercent / 100)) / people;
  }
}
