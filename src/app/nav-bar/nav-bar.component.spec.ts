import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to Home', () => {
    const link = fixture.debugElement.query(By.css('a[routerLink="/home"]'));
    expect(link).toBeTruthy();
  });

  it('should have a link to Cars', () => {
    const link = fixture.debugElement.query(By.css('a[routerLink="/cars"]'));
    expect(link).toBeTruthy();
  });

  it('should have a link to Films', () => {
    const link = fixture.debugElement.query(By.css('a[routerLink="/films"]'));
    expect(link).toBeTruthy();
  });

  it('should have a link to Characters', () => {
    const link = fixture.debugElement.query(By.css('a[routerLink="/characters"]'));
    expect(link).toBeTruthy();
  });

  it('should toggle menu on button click', () => {
    component.showMenu = false;
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.showMenu).toBeTrue();
    button.triggerEventHandler('click', null);
    expect(component.showMenu).toBeFalse();
  });
});
