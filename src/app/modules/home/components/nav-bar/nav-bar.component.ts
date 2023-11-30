import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from '@shared/services/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  term = '';
  showInput = window.location.pathname === '/';

  constructor(
    private router: Router,
    public cookieService: CookieService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          this.showInput = event.url === '/';
        }
      },
    });
  }

  // SE ELIMINAN LAS COOKIES LUEGO DE CERRAR LA SESION
  closeSessionAdmin(): void {
    this.cookieService.deleteAll('/');
    this.router.navigate(['/auth/login']);
  }
}
