import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';
import { ShoppingListService } from '@shared/services/shopping-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  buttons!: { label: string; path: string }[];

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService
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

    this.recipesService.setFavorites(this.recipesService.getFavorites());

    this.shoppingListService.setShoppingList(
      this.shoppingListService.getShoppingList()
    );
  }
}
