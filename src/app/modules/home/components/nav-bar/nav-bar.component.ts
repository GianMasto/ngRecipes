import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(
    private router: Router,
    public cookieService: CookieService
  ) {}

  // SE ELIMINAN LAS COOKIES LUEGO DE CERRAR LA SESION
  closeSessionAdmin(): void {
    this.cookieService.deleteAll('/');
    this.router.navigate(['/auth/login']);
  }
}
