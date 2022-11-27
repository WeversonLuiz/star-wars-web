import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from '../pages/films/films.component';
import { HomeComponent } from '../pages/home/home.component';
import { PagesModule } from '../pages/pages.module';
import { PlanetsComponent } from '../pages/planets/planets.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PageHeaderComponent } from './page-header/page-header.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'planets',
        component: PlanetsComponent
      },
      {
        path: 'films',
        component: FilmsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    PageHeaderComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    PagesModule
  ],
  exports: [
  ]
})
export class LayoutModule { }
