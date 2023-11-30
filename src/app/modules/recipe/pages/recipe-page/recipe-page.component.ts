import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingListService } from '@shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnInit {
  id!: string | null;
  recipe!: RecipeModel;

  constructor(
    private route: ActivatedRoute,
    public recipeService: RecipesService,
    public cookieService: CookieService,
    public shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.recipeService.recipes$.subscribe({
      next: r => {
        this.recipe = r.find(recipe => recipe._id === this.id) as RecipeModel;
      },
    });
  }
}
