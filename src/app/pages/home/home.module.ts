import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PagesModule } from '../pages.module';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
      path: "",
      component: HomeComponent,
  },
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ]
})
export class HomeModule { }
