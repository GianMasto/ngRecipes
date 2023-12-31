import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { FavoritesService } from '@shared/services/favorites.service';
import { RecipesService } from '@shared/services/recipes.service';
import { ShoppingListService } from '@shared/services/shopping-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  buttons!: { label: string; path: string }[];

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private favoritesService: FavoritesService
  ) {}

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

    this.recipesService.getRecipes().subscribe({
      next: data => {
        const arr = data as RecipeModel[];
        this.recipesService.recipes$.next(arr);
      },
      error: e => console.error(e),
    });

    this.favoritesService.setFavorites(this.favoritesService.getFavorites());

    this.shoppingListService.setShoppingList(
      this.shoppingListService.getShoppingList()
    );
  }
  ngOnDestroy(): void {}
}
