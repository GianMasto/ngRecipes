import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipesService } from '@shared/services/recipes.service';
import { RecipeModel } from '@core/models/recipe.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-recipe-card',
  templateUrl: './add-recipe-card.component.html',
  styleUrls: ['./add-recipe-card.component.css'],
})
export class AddRecipeCardComponent implements OnInit {
  formNewRecipe: FormGroup = new FormGroup({});

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.formNewRecipe = new FormGroup({
      // _id: new FormControl('', [Validators.required, Validators.minLength(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      amount: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      ingredients: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      imagePath: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      /*
      userEmail: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.minLength(4),
      ]),
      __v: new FormControl('', [Validators.required, Validators.minLength(4)]),
      */
    });
  }

  addNewRecipe($event: any): void {
    $event.preventDefault();
    const {ingredients,amount}=this.formNewRecipe.value
    const body = {
      ...this.formNewRecipe.value,
      ingredients: [{
        amount:amount,
        name:ingredients
      }]
    };
    this.formNewRecipe.reset()
    this.recipeService.addRecipe(body).subscribe(response => {
      Swal.fire({
        title: 'Receta agregada!',
        icon: 'success',
        customClass: {
          popup: 'sweet-popup',
        },
      });
      console.log(response);
      this.recipeService.getRecipes().subscribe({
        next: data => {
          const arr = data as RecipeModel[];
          this.recipeService.recipes$.next(arr);
        },
        error: e => console.error(e),
      });
    });
  }
}
