import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  buttons!: { label: string; path: string }[];
  ngOnInit(): void {
    this.buttons = [
      {
        label: 'Recipes',
        path: '/',
      },
      {
        label: 'Favorites',
        path: '/favorites',
      },
      {
        label: 'Shopping List',
        path: '/shopping-list',
      },
    ];
  }
}
