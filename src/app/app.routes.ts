import { Routes } from '@angular/router';
import { OpenmethodComponent } from './componets/openmethod/openmethod.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: OpenmethodComponent },
];
