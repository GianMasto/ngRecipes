import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageComponent } from './favorites-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [FavoritesPageComponent]
    });
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
