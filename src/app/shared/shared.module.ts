import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { IconsModule } from '../icons/icons.module';
import { AddRecipeCardComponent } from './components/add-recipe-card/add-recipe-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecipeCardComponent, AddRecipeCardComponent],
  imports: [CommonModule, IconsModule, RouterModule],
  exports: [RecipeCardComponent, AddRecipeCardComponent],
})
export class SharedModule {}
