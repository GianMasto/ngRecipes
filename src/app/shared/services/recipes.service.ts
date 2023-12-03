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

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  getRecipes() {
    return this.http.get(`${this.URL}/api/recipes?auth=${this.token}`);
  }

  addRecipe(body: RecipeModel) {
    console.log(body);
    return this.http.post(
      `${this.URL}/api/recipes/add?auth=${this.token}`,
      body
    );
  }

  editRecipe(id: string, body: any) {
    console.log(id, body);
    return this.http.put(
      `${this.URL}/api/recipes/edit/${id}?auth=${this.token}`,
      body
    );
  }

  deleteRecipe(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(
      `${this.URL}/api/recipes/delete/${id}?auth=${this.token}`
    );
  }
}
