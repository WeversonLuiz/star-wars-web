import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Menu } from './menu-item/menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {
    console.log("Passou aqui - LayoutComponent");
  }

  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Star Wars',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Planets',
          icon: 'money',
          link: '/planets',
          color: '#ff7f0e',
        },
        {
          title: 'films',
          icon: 'people',
          color: '#ff7f0e',
          link: '/films',
        },
      ],
    },
  ];

}
