import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "star-wars",
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    // data: {
    //     pageTitle: 'Assinar Ato Administrativo'
    // }
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [
    AppComponent,
    AppModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
