import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-tip-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ResultComponent],
  templateUrl: './tip-form.component.html',
  styleUrls: ['./tip-form.component.scss']
})
export class TipFormComponent {
  bill: number = 0;
  tipPercent: number = 15;
  people: number = 1;

  tipPerPerson: number = 0;
  totalPerPerson: number = 0;

  history: any[] = [];
  calculated: boolean = false;
  error: string = ''; 

  constructor() {
    const savedTip = localStorage.getItem('customTip');
    if (savedTip) this.tipPercent = +savedTip;

    const savedHistory = localStorage.getItem('tipHistory');
    if (savedHistory) this.history = JSON.parse(savedHistory);
  }

  calculate() {
    this.error = ''; 

    if (this.bill <= 0 || this.tipPercent < 0 || this.people <= 0) {
      this.error = 'Please enter positive numbers greater than zero.';
      return;
    }

    this.tipPerPerson = (this.bill * this.tipPercent) / 100 / this.people;
    this.totalPerPerson = (this.bill / this.people) + this.tipPerPerson;
    this.calculated = true;

    localStorage.setItem('customTip', this.tipPercent.toString());

    const entry = {
      bill: this.bill,
      tipPercent: this.tipPercent,
      people: this.people,
      tipPerPerson: this.tipPerPerson,
      totalPerPerson: this.totalPerPerson
    };

    this.history.unshift(entry);
    if (this.history.length > 5) this.history.pop();
    localStorage.setItem('tipHistory', JSON.stringify(this.history));
  }

  reset() {
    this.bill = 0;
    this.people = 1;
    this.tipPercent = 10;
    this.tipPerPerson = 0;
    this.totalPerPerson = 0;
    this.calculated = false;
    this.error = ''; 
  }
}
