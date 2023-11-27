import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListPageComponent } from './pages/shopping-list-page/shopping-list-page.component';


@NgModule({
  declarations: [
    ShoppingListPageComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
