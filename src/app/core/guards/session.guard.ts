import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard = (): boolean => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  // GUARDIAN PARA PROTEGER RUTAS A TRAVÉS DEL TOKEN 
  try {
    const token: boolean = cookieService.check('token');
    if (!token) {
      router.navigate(['/', 'auth']);
    }

    return token;
  } catch (e) {
    console.log('error 👉', e);
    return false;
  }
};