import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css'],
})
export class NavButtonsComponent {
  @Input() buttons!: { label: string; path: string }[];
}
