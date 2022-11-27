import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-web',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'star-wars-web';

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("Passou aqui - AppComponent");
    throw new Error('Method not implemented.');
  }
}
