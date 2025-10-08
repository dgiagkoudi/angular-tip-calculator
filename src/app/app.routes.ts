import { Routes } from '@angular/router';
import { TipFormComponent } from './components/tip-form/tip-form.component';

export const routes: Routes = [
  { path: '', component: TipFormComponent },
  { 
    path: 'history', 
    loadComponent: () => import('./components/history-page/history-page.component')
      .then(m => m.HistoryPageComponent) 
  }
];
