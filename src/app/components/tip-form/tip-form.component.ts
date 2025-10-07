import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tip-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tip-form.component.html',
  styleUrls: ['./tip-form.component.scss']
})

export class TipFormComponent {
  bill: number = 0;
  tipPercent: number = 10;
  people: number = 1;

  tipPerPerson: number = 0;
  totalPerPerson: number = 0;

  calculate() {
    if (this.bill > 0 && this.people > 0) {
      this.tipPerPerson = (this.bill * (this.tipPercent / 100)) / this.people;
      this.totalPerPerson = (this.bill * (1 + this.tipPercent / 100)) / this.people;
    }
  }

  reset() {
    this.bill = 0;
    this.tipPercent = 10;
    this.people = 1;
    this.tipPerPerson = 0;
    this.totalPerPerson = 0;
  }
}
