import { OverlayModule } from '@angular/cdk/overlay';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './pages/planets/planets.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
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
  // {
  //   path: "star-wars",
  //   loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  //   // data: {
  //   //     pageTitle: 'Assinar Ato Administrativo'
  //   // }
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuItemComponent,
    LayoutComponent,
    HeaderComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    OverlayModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
   // RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  exports: [
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/star-wars' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
