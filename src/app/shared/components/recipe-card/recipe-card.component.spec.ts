import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { RecipeCardComponent } from './recipe-card.component';
import { CutTextPipe } from '@shared/pipes/cut-text.pipe';
import { IconsModule } from 'src/app/icons/icons.module';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,IconsModule],
      declarations: [RecipeCardComponent,CutTextPipe]
    });
    // fixture = TestBed.createComponent(RecipeCardComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
