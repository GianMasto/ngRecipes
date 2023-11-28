import { IngredientModel } from './Ingredient.model';

export interface RecipeModel {
  _id: string;
  name: string;
  description: string;
  ingredients: IngredientModel[];
  imagePath: string;
  userEmail: string;
  __v: number;
}
