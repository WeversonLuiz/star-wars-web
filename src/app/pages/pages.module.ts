import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // data: {
    //     pageTitle: 'Assinar Ato Administrativo'
    // }
  },
  {
    path: "planets",
    loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule),
    // data: {
    //     pageTitle: 'Assinar Ato Administrativo'
    // }
  },
  {
    path: "films",
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule),
    // data: {
    //     pageTitle: 'Assinar Ato Administrativo'
    // }
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    AppModule
  ],
  exports: [
    PagesModule
  ]
})
export class PagesModule { }
