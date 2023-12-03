import { Component } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { FavoritesService } from '@shared/services/favorites.service';
import { RecipesService } from '@shared/services/recipes.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent {
  allRecipes: RecipeModel[] = [];
  favoriteRecipes: RecipeModel[] = [];

  constructor(
    private recipesService: RecipesService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.recipesService.recipes$.subscribe({
      next: r => {
        this.allRecipes = r;
        this.favoritesService.favorites$.subscribe({
          next: ids => {
            this.favoriteRecipes = this.allRecipes.filter(recipe =>
              ids.includes(recipe._id)
            );
          },
        });
      },
    });
  }
}
