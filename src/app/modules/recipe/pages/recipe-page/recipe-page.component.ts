import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipesService } from '@shared/services/recipes.service';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingListService } from '@shared/services/shopping-list.service';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { FavoritesService } from '@shared/services/favorites.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnInit {
  id!: string | null;
  recipe!: RecipeModel;
  openForm: boolean = false;
  formEdit!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    public recipeService: RecipesService,
    public cookieService: CookieService,
    public shoppingListService: ShoppingListService,
    public favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.recipeService.recipes$.subscribe({
      next: r => {
        this.recipe = r.find(recipe => recipe._id === this.id) as RecipeModel;
      },
    });

    this.formEdit = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      amount: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      ingredients: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  openFormEdit() {
    this.openForm = true;
  }

  submitChanges(recipe: any, $event: any): void {
    $event.preventDefault();
    const { _id } = recipe;
    const { name, description, ingredients, amount } = this.formEdit.value;
    this.recipeService.getRecipes().subscribe({
      next: data => {
        const arr = data as RecipeModel[];
        const recipeFind = arr.find(obj => obj._id === _id);

        const newBody = {
          ...recipeFind,
          name: name,
          description: description,
          ingredients: [
            {
              amount: amount,
              name: ingredients,
            },
          ],
        };

        this.recipeService.editRecipe(_id, newBody).subscribe(response => {
          console.log(response);
          Swal.fire({
            title: 'Receta editada!',
            icon: 'success',
            customClass: {
              popup: 'sweet-popup',
            },
          });
        });
      },
      error: e => console.error(e),
    });
    this.formEdit.reset();
    this.openForm = false;
  }

  closeEdition() {
    this.openForm = false;
    this.formEdit.reset();
  }
}
