import { Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {LabsComponent} from './pages/labs/labs.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { LayoutComponent } from '@components/layout/layout.component';

export const routes: Routes = [
    { 
        path : '',  
        component : LayoutComponent,
        children:[
            { path : 'home',  component : HomeComponent },
            { path : 'products',  component : ProductListComponent },
            { path : 'labs',  component : LabsComponent },
        ] 
    },
    { path : '**',  component : NotFoundComponent }
];
