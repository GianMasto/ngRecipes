import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '../../core/models/recipe.model';
import { environment } from '../../../environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly URL = environment.api;
  private readonly token = this.cookie.get('token');

  recipes$ = new BehaviorSubject<RecipeModel[]>([]);
  favorites$ = new BehaviorSubject<String[]>([]);

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  getRecipes() {
    return this.http.get(`${this.URL}/api/recipes?auth=${this.token}`);
  }

  addRecipe(body: RecipeModel) {}

  editRecipe(id: string, body: RecipeModel) {}

  deleteRecipe(id: string) {}

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
