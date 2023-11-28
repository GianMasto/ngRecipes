import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent implements OnInit {
  recipes: RecipeModel[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipes$.subscribe({
      next: r => (this.recipes = r),
    });
  }
}
