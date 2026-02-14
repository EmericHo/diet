import { Injectable, signal } from '@angular/core';
import { DayPlan, Recipe, ShoppingItem, MealItem } from '../models/diet.models';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  // Fixed breakfast
  private readonly fixedBreakfast: MealItem = {
    name: '2 tranches pain complet + 1 tranche jambon',
    fazPoints: 2,
    description: 'Petit-déjeuner fixe'
  };

  // Signals for reactive state
  weeklyPlan = signal<DayPlan[]>(this.generateWeeklyPlan());
  recipes = signal<Recipe[]>(this.generateRecipes());
  shoppingList = signal<ShoppingItem[]>(this.generateShoppingList());

  constructor() {}

  private generateWeeklyPlan(): DayPlan[] {
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const recipes = this.generateRecipes();
    
    return days.map((day, index) => {
      const lunch: MealItem = {
        name: `Déjeuner J${index}`,
        fazPoints: 1,
        description: '1F riz ou pâtes'
      };
      
      return {
        day,
        breakfast: this.fixedBreakfast,
        morningSnack: {
          name: '1 compote',
          fazPoints: 1,
          description: '1Z'
        },
        lunch,
        afternoonSnack: {
          name: '1 yaourt + 1 fruit',
          fazPoints: 1,
          description: '1Z'
        },
        dinner: {
          name: recipes[index].name,
          fazPoints: recipes[index].fazPoints,
          description: recipes[index].category
        },
        totalFAZ: 2 + 1 + 1 + 1 + 0 // PD + Col AM + Déj + Col PM + Dîner (0F)
      };
    });
  }

  private generateRecipes(): Recipe[] {
    return [
      {
        id: '1',
        name: 'Poulet aux poireaux',
        fazPoints: 0,
        prepTime: 15,
        cookTime: 30,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de poulet', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Poireaux', quantity: '1.2kg (4-5 poireaux)', category: 'Légumes' },
          { name: 'Oignons', quantity: '2 moyens', category: 'Légumes' },
          { name: 'Bouillon de volaille', quantity: '500ml', category: 'Condiments' },
          { name: 'Crème fraîche allégée', quantity: '3 cuillères à soupe', category: 'Produits laitiers' },
          { name: 'Sel, poivre', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Laver et couper les poireaux en tronçons de 2cm.',
          'Émincer les oignons.',
          'Dans une grande poêle, faire revenir les oignons sans matière grasse.',
          'Ajouter les escalopes de poulet et les faire dorer de chaque côté.',
          'Ajouter les poireaux et le bouillon de volaille.',
          'Couvrir et laisser mijoter 25 minutes à feu moyen.',
          'En fin de cuisson, ajouter la crème fraîche, mélanger et servir.'
        ]
      },
      {
        id: '2',
        name: 'Dinde au chou vert',
        fazPoints: 0,
        prepTime: 15,
        cookTime: 35,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de dinde', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Chou vert', quantity: '1.2kg (1 petit chou)', category: 'Légumes' },
          { name: 'Carottes', quantity: '300g (3 moyennes)', category: 'Légumes' },
          { name: 'Ail', quantity: '3 gousses', category: 'Condiments' },
          { name: 'Bouillon de légumes', quantity: '400ml', category: 'Condiments' },
          { name: 'Sel, poivre, thym', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Laver et émincer le chou vert.',
          'Éplucher et couper les carottes en rondelles.',
          'Faire revenir l\'ail émincé dans une cocotte sans matière grasse.',
          'Ajouter les escalopes de dinde et les saisir.',
          'Ajouter le chou, les carottes et le bouillon.',
          'Assaisonner avec sel, poivre et thym.',
          'Couvrir et laisser mijoter 30-35 minutes.'
        ]
      },
      {
        id: '3',
        name: 'Poulet au brocoli',
        fazPoints: 0,
        prepTime: 10,
        cookTime: 25,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de poulet', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Brocoli', quantity: '1.2kg (2 têtes)', category: 'Légumes' },
          { name: 'Échalotes', quantity: '3', category: 'Légumes' },
          { name: 'Sauce soja légère', quantity: '3 cuillères à soupe', category: 'Condiments' },
          { name: 'Gingembre frais', quantity: '1 morceau de 2cm', category: 'Condiments' },
          { name: 'Sel, poivre', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Laver et détailler le brocoli en bouquets.',
          'Émincer les échalotes et râper le gingembre.',
          'Faire cuire le brocoli à la vapeur pendant 10 minutes.',
          'Dans une poêle, faire revenir les échalotes et le gingembre.',
          'Ajouter les escalopes de poulet coupées en morceaux.',
          'Ajouter la sauce soja et faire cuire 10 minutes.',
          'Incorporer le brocoli, mélanger et servir.'
        ]
      },
      {
        id: '4',
        name: 'Dinde aux épinards',
        fazPoints: 0,
        prepTime: 10,
        cookTime: 20,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de dinde', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Épinards frais', quantity: '1.2kg', category: 'Légumes' },
          { name: 'Oignons', quantity: '2', category: 'Légumes' },
          { name: 'Ail', quantity: '2 gousses', category: 'Condiments' },
          { name: 'Fromage blanc 0%', quantity: '200g', category: 'Produits laitiers' },
          { name: 'Muscade, sel, poivre', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Laver les épinards et les faire tomber dans une casserole.',
          'Égoutter les épinards et les hacher grossièrement.',
          'Faire revenir les oignons et l\'ail émincés.',
          'Ajouter les escalopes de dinde et les faire dorer.',
          'Incorporer les épinards et le fromage blanc.',
          'Assaisonner avec muscade, sel et poivre.',
          'Laisser mijoter 15 minutes à feu doux.'
        ]
      },
      {
        id: '5',
        name: 'Poulet au poivron et chou-fleur',
        fazPoints: 0,
        prepTime: 15,
        cookTime: 30,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de poulet', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Chou-fleur', quantity: '800g (1 petit)', category: 'Légumes' },
          { name: 'Poivrons rouges', quantity: '400g (3 moyens)', category: 'Légumes' },
          { name: 'Tomates concassées', quantity: '400ml', category: 'Légumes' },
          { name: 'Paprika, cumin', quantity: '1 c. à café chacun', category: 'Condiments' },
          { name: 'Sel, poivre', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Détailler le chou-fleur en bouquets.',
          'Couper les poivrons en lanières.',
          'Faire revenir les escalopes de poulet dans une cocotte.',
          'Ajouter les poivrons et faire revenir 5 minutes.',
          'Ajouter le chou-fleur et les tomates concassées.',
          'Assaisonner avec paprika, cumin, sel et poivre.',
          'Couvrir et laisser mijoter 25 minutes.'
        ]
      },
      {
        id: '6',
        name: 'Dinde aux haricots verts',
        fazPoints: 0,
        prepTime: 10,
        cookTime: 25,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de dinde', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Haricots verts', quantity: '1.2kg (3 sacs de 400g)', category: 'Légumes' },
          { name: 'Tomates', quantity: '4 moyennes', category: 'Légumes' },
          { name: 'Ail', quantity: '3 gousses', category: 'Condiments' },
          { name: 'Herbes de Provence', quantity: '1 c. à soupe', category: 'Condiments' },
          { name: 'Sel, poivre', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Laver et équeuter les haricots verts.',
          'Couper les tomates en dés.',
          'Faire revenir l\'ail émincé dans une poêle.',
          'Ajouter les escalopes de dinde et les faire dorer.',
          'Ajouter les haricots verts et les tomates.',
          'Assaisonner avec herbes de Provence, sel et poivre.',
          'Couvrir et laisser cuire 20-25 minutes à feu moyen.'
        ]
      },
      {
        id: '7',
        name: 'Poulet aux champignons et courgettes',
        fazPoints: 0,
        prepTime: 15,
        cookTime: 25,
        servings: 6,
        category: 'Volaille',
        ingredients: [
          { name: 'Escalopes de poulet', quantity: '6 escalopes (~1.1kg)', category: 'Protéines' },
          { name: 'Champignons de Paris', quantity: '600g', category: 'Légumes' },
          { name: 'Courgettes', quantity: '600g (3 moyennes)', category: 'Légumes' },
          { name: 'Échalotes', quantity: '3', category: 'Légumes' },
          { name: 'Vin blanc sec', quantity: '100ml', category: 'Condiments' },
          { name: 'Persil frais', quantity: '1 bouquet', category: 'Condiments' },
          { name: 'Sel, poivre', quantity: 'Au goût', category: 'Condiments' }
        ],
        steps: [
          'Nettoyer et émincer les champignons.',
          'Couper les courgettes en rondelles.',
          'Faire revenir les échalotes émincées.',
          'Ajouter les escalopes de poulet et les faire dorer.',
          'Ajouter les champignons et les courgettes.',
          'Verser le vin blanc et laisser réduire.',
          'Assaisonner, ajouter le persil haché et servir.'
        ]
      }
    ];
  }

  private generateShoppingList(): ShoppingItem[] {
    return [
      {
        category: 'Protéines',
        items: [
          '18 escalopes de poulet (~3.3kg)',
          '12 escalopes de dinde (~2.2kg)'
        ]
      },
      {
        category: 'Légumes',
        items: [
          'Poireaux : 1.2kg (4-5 poireaux)',
          'Chou vert : 1.2kg (1 petit chou)',
          'Brocoli : 1.2kg (2 têtes)',
          'Épinards frais : 1.2kg',
          'Chou-fleur : 800g (1 petit)',
          'Poivrons rouges : 400g (3 moyens)',
          'Haricots verts : 1.2kg (3 sacs de 400g)',
          'Champignons de Paris : 600g',
          'Courgettes : 600g (3 moyennes)',
          'Carottes : 300g (3 moyennes)',
          'Tomates : 4 moyennes',
          'Tomates concassées : 400ml',
          'Oignons : 6 moyens',
          'Échalotes : 9',
          'Ail : 11 gousses'
        ]
      },
      {
        category: 'Produits laitiers',
        items: [
          'Crème fraîche allégée : 3 c. à soupe',
          'Fromage blanc 0% : 200g',
          'Yaourts : 7',
          'Lait : 1L'
        ]
      },
      {
        category: 'Féculents',
        items: [
          'Riz complet : 500g',
          'Pâtes complètes : 500g'
        ]
      },
      {
        category: 'Pain',
        items: [
          'Pain complet : 2 pains (14 tranches)',
          'Jambon : 7 tranches'
        ]
      },
      {
        category: 'Fruits',
        items: [
          'Compotes : 7',
          'Fruits variés : 7 (pommes, poires, etc.)'
        ]
      },
      {
        category: 'Condiments',
        items: [
          'Bouillon de volaille : 500ml',
          'Bouillon de légumes : 400ml',
          'Sauce soja légère : 3 c. à soupe',
          'Vin blanc sec : 100ml',
          'Gingembre frais : 1 morceau',
          'Herbes de Provence : 1 c. à soupe',
          'Paprika : 1 c. à café',
          'Cumin : 1 c. à café',
          'Thym, muscade, sel, poivre',
          'Persil frais : 1 bouquet'
        ]
      }
    ];
  }

  updateWeeklyPlan(plan: DayPlan[]): void {
    this.weeklyPlan.set(plan);
  }
}
