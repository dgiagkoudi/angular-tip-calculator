import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      this.setDarkMode(saved === 'true');
    }
  }

  toggleTheme() {
    this.setDarkMode(!this.darkModeSubject.value);
  }

  setDarkMode(value: boolean) {
    this.darkModeSubject.next(value);
    localStorage.setItem('darkMode', value.toString());

    if (value) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
