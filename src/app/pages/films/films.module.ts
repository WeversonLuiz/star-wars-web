import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { Routes } from '@angular/router';
import { FilmsComponent } from './films.component';

const routes: Routes = [
  {
      path: "",
      component: FilmsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule
  ]
})
export class FilmsModule { }
