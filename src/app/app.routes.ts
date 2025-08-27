// src/app/app.routes.ts

import { Routes } from '@angular/router';

// Importe os componentes de página que você criou
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Rota padrão (página inicial)
    { path: 'sobre', component: AboutComponent },
    { path: 'servicos', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contato', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona para home se a rota não existir
];