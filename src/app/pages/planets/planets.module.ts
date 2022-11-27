import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { PagesModule } from '../pages.module';

const routes: Routes = [
  {
      path: "",
      component: PlanetsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule
  ]
})
export class PlanetsModule { }
