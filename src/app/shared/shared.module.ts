import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { IconsModule } from '../icons/icons.module';
import { AddRecipeCardComponent } from './components/add-recipe-card/add-recipe-card.component';
import { RouterModule } from '@angular/router';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeCardComponent, AddRecipeCardComponent, CutTextPipe],
  imports: [CommonModule, IconsModule, RouterModule, ReactiveFormsModule],
  exports: [RecipeCardComponent, AddRecipeCardComponent],
})
export class SharedModule {}
