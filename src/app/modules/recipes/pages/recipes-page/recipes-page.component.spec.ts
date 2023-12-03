import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPageComponent } from './recipes-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddRecipeCardComponent } from '@shared/components/add-recipe-card/add-recipe-card.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RecipesPageComponent', () => {
  let component: RecipesPageComponent;
  let fixture: ComponentFixture<RecipesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule],
      declarations: [RecipesPageComponent,AddRecipeCardComponent]
    });
    fixture = TestBed.createComponent(RecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
