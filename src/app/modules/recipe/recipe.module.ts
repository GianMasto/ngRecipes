import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  declarations: [RecipePageComponent],
  imports: [CommonModule, RecipeRoutingModule, IconsModule],
})
export class RecipeModule {}
