import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';

@NgModule({
  declarations: [HomePageComponent, NavBarComponent, NavButtonsComponent],
  imports: [CommonModule, HomeRoutingModule, IconsModule],
})
export class HomeModule {}
