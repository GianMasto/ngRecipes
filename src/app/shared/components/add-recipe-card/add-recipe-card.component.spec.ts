import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeCardComponent } from './add-recipe-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddRecipeCardComponent', () => {
  let component: AddRecipeCardComponent;
  let fixture: ComponentFixture<AddRecipeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule],
      declarations: [AddRecipeCardComponent]
    });
    fixture = TestBed.createComponent(AddRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
