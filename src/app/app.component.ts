import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode = false;

  constructor(public themeService: ThemeService) {
    this.themeService.darkMode$.subscribe(v => {
      this.darkMode = v;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
