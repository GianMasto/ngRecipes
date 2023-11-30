import { Component, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';
import { ShoppingListService } from '@shared/services/shopping-list.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent {
  @Input() recipe!: RecipeModel;
  recipes: RecipeModel[] = [];

  constructor(
    public recipeService: RecipesService,
    public cookieService: CookieService,
    public shoppingListService: ShoppingListService
  ) {}

  deleteRecipe(recipe: any): void {
    const { _id } = recipe;
    Swal.fire({
      title: `¿Está seguro de eliminar la canción ${recipe.name}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
      customClass: {
        popup: 'sweet-popup',
      },
    }).then(result => {
      if (result.isConfirmed) {
        this.recipeService.deleteRecipe(_id).subscribe(
          () => {
            Swal.fire({
              title: 'Eliminada!',
              icon: 'success',
              customClass: {
                popup: 'sweet-popup',
              },
            });
            this.recipeService.getRecipes().subscribe({
              next: data => {
                const arr = data as RecipeModel[];
                this.recipeService.recipes$.next(arr);
              },
              error: e => console.error(e),
            });
          },
          (error: any) => {
            console.log(error);
            Swal.fire({
              title: 'Error ',
              icon: 'error',
              customClass: {
                popup: 'sweet-popup',
              },
            });
          }
        );
      }
    });
  }
}
