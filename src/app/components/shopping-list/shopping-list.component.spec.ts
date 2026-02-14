import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ShoppingListComponent } from './shopping-list.component';
import { DietService } from '../../services/diet.service';

describe('ShoppingListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListComponent],
      providers: [
        provideAnimations(),
        DietService
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display shopping list from service', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    expect(component.shoppingList()).toBeDefined();
    expect(component.shoppingList().length).toBeGreaterThan(0);
  });

  it('should render shopping list title', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Liste de Courses');
  });

  it('should have all required categories', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    const categories = component.shoppingList().map(item => item.category);
    
    expect(categories).toContain('Protéines');
    expect(categories).toContain('Légumes');
    expect(categories).toContain('Produits laitiers');
    expect(categories).toContain('Féculents');
    expect(categories).toContain('Pain');
    expect(categories).toContain('Fruits');
    expect(categories).toContain('Condiments');
  });

  it('should return correct icon for each category', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    
    expect(component.getCategoryIcon('Protéines')).toBe('restaurant');
    expect(component.getCategoryIcon('Légumes')).toBe('spa');
    expect(component.getCategoryIcon('Féculents')).toBe('grain');
    expect(component.getCategoryIcon('Produits laitiers')).toBe('water_drop');
    expect(component.getCategoryIcon('Fruits')).toBe('local_florist');
    expect(component.getCategoryIcon('Pain')).toBe('bakery_dining');
    expect(component.getCategoryIcon('Condiments')).toBe('blender');
    expect(component.getCategoryIcon('Unknown')).toBe('shopping_cart');
  });
});
