import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';
import { SearchService } from '@shared/services/search.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent implements OnInit {
  recipes: RecipeModel[] = [];
  recipesFiltered: RecipeModel[] = [];

  constructor(
    private recipesService: RecipesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.recipesService.recipes$.subscribe({
      next: r => {
        this.recipes = r;
        this.recipesFiltered = this.recipes;
      },
    });

    this.searchService.searchTerm$.subscribe({
      next: term => {
        if (term === '') {
          this.recipesFiltered = this.recipes;
        } else {
          this.recipesFiltered = this.recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(term.toLowerCase())
          );
        }
      },
    });
  }
}
