import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListPageComponent } from './shopping-list-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShoppingListPageComponent', () => {
  let component: ShoppingListPageComponent;
  let fixture: ComponentFixture<ShoppingListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ShoppingListPageComponent]
    });
    fixture = TestBed.createComponent(ShoppingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
