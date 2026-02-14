export interface DayPlan {
  day: string;
  breakfast: MealItem;
  morningSnack: MealItem;
  lunch: MealItem;
  afternoonSnack: MealItem;
  dinner: MealItem;
  totalFAZ: number;
}

export interface MealItem {
  name: string;
  fazPoints: number;
  description?: string;
}

export interface Recipe {
  id: string;
  name: string;
  fazPoints: number;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
  category: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  category: IngredientCategory;
}

export type IngredientCategory = 'Protéines' | 'Légumes' | 'Féculents' | 'Produits laitiers' | 'Fruits' | 'Pain' | 'Condiments';

export interface ShoppingItem {
  category: IngredientCategory;
  items: string[];
}
