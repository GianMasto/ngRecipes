import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';
import { ShoppingListService } from '@shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.css'],
})
export class ShoppingListPageComponent implements OnInit {
  objectKeys = Object.keys;
  allRecipes: RecipeModel[] = [];
  ingredients: { [key: string]: number } = {};

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.recipesService.recipes$.subscribe({
      next: r => (this.allRecipes = r),
    });

    this.shoppingListService.shoppingList$.subscribe({
      next: ids => {
        ids.forEach(id => {
          const recipe = this.allRecipes.find(recipe => recipe._id === id);

          recipe?.ingredients.forEach(({ amount, name }) => {
            const key = name.toLowerCase();
            if (name in this.ingredients) {
              this.ingredients[key] = +this.ingredients[key] + +amount;
            } else {
              this.ingredients[key] = +amount;
            }
          });
        });
      },
    });
  }
}
