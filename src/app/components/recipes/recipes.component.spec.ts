import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RecipesComponent } from './recipes.component';
import { DietService } from '../../services/diet.service';

describe('RecipesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesComponent],
      providers: [
        provideAnimations(),
        DietService
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RecipesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display 7 recipes from service', () => {
    const fixture = TestBed.createComponent(RecipesComponent);
    const component = fixture.componentInstance;
    expect(component.recipes()).toBeDefined();
    expect(component.recipes().length).toBe(7);
  });

  it('should render recipes title', () => {
    const fixture = TestBed.createComponent(RecipesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Recettes de la Semaine');
  });

  it('should display all recipes with 0F points', () => {
    const fixture = TestBed.createComponent(RecipesComponent);
    const component = fixture.componentInstance;
    const recipes = component.recipes();
    
    recipes.forEach(recipe => {
      expect(recipe.fazPoints).toBe(0);
      expect(recipe.servings).toBe(6);
    });
  });

  it('should have winter vegetables in recipes', () => {
    const fixture = TestBed.createComponent(RecipesComponent);
    const component = fixture.componentInstance;
    const recipes = component.recipes();
    
    const recipeNames = recipes.map(r => r.name.toLowerCase());
    const hasWinterVegetables = recipeNames.some(name => 
      name.includes('poireaux') || 
      name.includes('chou') || 
      name.includes('brocoli') || 
      name.includes('épinards')
    );
    
    expect(hasWinterVegetables).toBeTruthy();
  });
});
