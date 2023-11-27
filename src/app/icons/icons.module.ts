import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  LogOut,
  PlusCircle,
  Search,
  ShoppingCart,
  Bookmark,
  Edit,
  Trash,
} from 'angular-feather/icons';

const icons = {
  Search,
  LogOut,
  PlusCircle,
  ShoppingCart,
  Bookmark,
  Edit,
  Trash,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
