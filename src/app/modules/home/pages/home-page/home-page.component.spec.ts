import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from '@modules/home/components/nav-bar/nav-bar.component';
import { NavButtonsComponent } from '@modules/home/components/nav-buttons/nav-buttons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IconsModule } from 'src/app/icons/icons.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,IconsModule],
      declarations: [HomePageComponent,NavBarComponent,NavButtonsComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
