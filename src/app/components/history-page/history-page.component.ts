import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  history: any[] = [];

  ngOnInit() {
    const saved = localStorage.getItem('tipHistory');
    if (saved) {
      this.history = JSON.parse(saved);
    }
  }

  clearHistory() {
    localStorage.removeItem('tipHistory');
    this.history = [];
  }
}
