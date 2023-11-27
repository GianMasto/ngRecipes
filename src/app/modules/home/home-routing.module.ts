import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/recipes/recipes.module').then(m => m.RecipesModule),
  },
  {
    path: 'recipe/:id',
    loadChildren: () =>
      import('@modules/recipe/recipe.module').then(m => m.RecipeModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.module').then(
        m => m.FavoritesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('@modules/shopping-list/shopping-list.module').then(
        m => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
