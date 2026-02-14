import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'recipes',
    loadComponent: () => import('./components/recipes/recipes.component').then(m => m.RecipesComponent)
  },
  {
    path: 'shopping',
    loadComponent: () => import('./components/shopping-list/shopping-list.component').then(m => m.ShoppingListComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
