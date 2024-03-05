import { Routes } from '@angular/router';
import { SearchWilderComponent } from './search-wilder/search-wilder.component';
import { FightWilderComponent } from './fight-wilder/fight-wilder.component';

export const routes: Routes = [
    { path: 'wcs/', component: SearchWilderComponent },
    { path: 'wcs/:name', component: FightWilderComponent },
    { path: '', redirectTo: '/wcs', pathMatch: 'full' }
];


