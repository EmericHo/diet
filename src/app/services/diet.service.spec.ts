import { TestBed } from '@angular/core/testing';
import { DietService } from './diet.service';

describe('DietService', () => {
  let service: DietService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DietService]
    });
    service = TestBed.inject(DietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Weekly Plan', () => {
    it('should generate 7 days of meals', () => {
      const plan = service.weeklyPlan();
      expect(plan.length).toBe(7);
    });

    it('should have fixed breakfast for all days', () => {
      const plan = service.weeklyPlan();
      plan.forEach(day => {
        expect(day.breakfast.name).toBe('2 tranches pain complet + 1 tranche jambon');
        expect(day.breakfast.fazPoints).toBe(2);
      });
    });

    it('should calculate total FAZ correctly', () => {
      const plan = service.weeklyPlan();
      plan.forEach(day => {
        expect(day.totalFAZ).toBe(5);
      });
    });

    it('should have all required days', () => {
      const plan = service.weeklyPlan();
      const days = plan.map(d => d.day);
      expect(days).toContain('Lundi');
      expect(days).toContain('Mardi');
      expect(days).toContain('Mercredi');
      expect(days).toContain('Jeudi');
      expect(days).toContain('Vendredi');
      expect(days).toContain('Samedi');
      expect(days).toContain('Dimanche');
    });
  });

  describe('Recipes', () => {
    it('should generate 7 dinner recipes', () => {
      const recipes = service.recipes();
      expect(recipes.length).toBe(7);
    });

    it('should have all recipes with 0F points', () => {
      const recipes = service.recipes();
      recipes.forEach(recipe => {
        expect(recipe.fazPoints).toBe(0);
      });
    });

    it('should have all recipes with 6 servings', () => {
      const recipes = service.recipes();
      recipes.forEach(recipe => {
        expect(recipe.servings).toBe(6);
      });
    });

    it('should have unique recipe IDs', () => {
      const recipes = service.recipes();
      const ids = recipes.map(r => r.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(recipes.length);
    });

    it('should have ingredients with ~1.1kg protein per recipe', () => {
      const recipes = service.recipes();
      recipes.forEach(recipe => {
        const proteinIngredient = recipe.ingredients.find(
          ing => ing.category === 'Protéines'
        );
        expect(proteinIngredient).toBeDefined();
        expect(proteinIngredient?.quantity).toContain('1.1kg');
      });
    });

    it('should have preparation steps', () => {
      const recipes = service.recipes();
      recipes.forEach(recipe => {
        expect(recipe.steps.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Shopping List', () => {
    it('should generate shopping list with all categories', () => {
      const shoppingList = service.shoppingList();
      expect(shoppingList.length).toBe(7);
    });

    it('should have proteins category', () => {
      const shoppingList = service.shoppingList();
      const proteins = shoppingList.find(item => item.category === 'Protéines');
      expect(proteins).toBeDefined();
      expect(proteins?.items.length).toBeGreaterThan(0);
    });

    it('should have vegetables category', () => {
      const shoppingList = service.shoppingList();
      const vegetables = shoppingList.find(item => item.category === 'Légumes');
      expect(vegetables).toBeDefined();
      expect(vegetables?.items.length).toBeGreaterThan(0);
    });

    it('should include winter vegetables', () => {
      const shoppingList = service.shoppingList();
      const vegetables = shoppingList.find(item => item.category === 'Légumes');
      const vegList = vegetables?.items.join(' ').toLowerCase() || '';
      
      expect(vegList).toContain('poireaux');
      expect(vegList).toContain('chou');
      expect(vegList).toContain('brocoli');
      expect(vegList).toContain('épinards');
    });
  });

  describe('Update Weekly Plan', () => {
    it('should update weekly plan signal', () => {
      const initialPlan = service.weeklyPlan();
      const newPlan = [...initialPlan];
      newPlan[0].totalFAZ = 10;
      
      service.updateWeeklyPlan(newPlan);
      expect(service.weeklyPlan()[0].totalFAZ).toBe(10);
    });
  });
});
