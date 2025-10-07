import { Component } from '@angular/core';
import { TipFormComponent } from './components/tip-form/tip-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TipFormComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
