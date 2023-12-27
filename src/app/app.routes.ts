import { Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {LabsComponent} from './pages/labs/labs.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
    { path : '',  component : HomeComponent },
    { path : 'home',  component : HomeComponent },
    { path : 'products',  component : ProductListComponent },
    { path : 'labs',  component : LabsComponent }
];
