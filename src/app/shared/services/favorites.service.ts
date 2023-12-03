import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites$ = new BehaviorSubject<String[]>([]);

  constructor(private cookie: CookieService) {}

  getFavorites(): String[] {
    if (!this.cookie.check('favorite-recipes')) {
      this.cookie.set('favorite-recipes', '[]');
      return [];
    }
    return JSON.parse(this.cookie.get('favorite-recipes'));
  }

  setFavorites(newFavsArr: String[]) {
    this.cookie.set('favorite-recipes', JSON.stringify(newFavsArr));
    this.favorites$.next(newFavsArr);
  }

  private addFavorite(id: string) {
    const favorites = this.getFavorites();
    favorites.push(id);
    this.setFavorites(favorites);
  }

  private deleteFavorite(id: string) {
    const newFavsArr = this.getFavorites().filter(el => el !== id);
    this.setFavorites(newFavsArr);
  }

  isFavorite(id: string) {
    return this.getFavorites().includes(id);
  }

  toggleFavorite(id: string) {
    if (this.isFavorite(id)) {
      this.deleteFavorite(id);
    } else {
      this.addFavorite(id);
    }
  }
}
