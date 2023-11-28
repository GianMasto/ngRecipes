import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly URL = environment.api;
  private readonly token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTY1ZTgwY2UzMWQxNDgxNmRiMjY5OGUiLCJpYXQiOjE3MDExOTM4NTMsImV4cCI6MTcwMTIwODI1M30.k6NstfAZpXGAURRdSjqJb7DMyi6lBmy2hInWfxDSkFI';

  recipes$ = new BehaviorSubject<RecipeModel[]>([]);
  favorites$ = new BehaviorSubject<String[]>([]);

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  getRecipes() {
    return this.http.get(`${this.URL}/recipes?auth=${this.token}`);
  }

  getRecipe() {}

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

  addFavorite(id: string) {
    const favorites = this.getFavorites();
    favorites.push(id);
    this.setFavorites(favorites);
  }

  deleteFavorite(id: string) {
    const newFavsArr = this.getFavorites().filter(el => el !== id);
    this.setFavorites(newFavsArr);
  }
}
