import { Routes } from '@angular/router';
import { CadastrarComponent } from './menu/cadastrar/cadastrar.component';
import { ConsultarComponent } from './menu/consultar/consultar.component';
import { HomeComponent } from './menu/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Página inicial
    { path: 'sobre', component: CadastrarComponent },
    { path: 'contato', component: ConsultarComponent }
];
