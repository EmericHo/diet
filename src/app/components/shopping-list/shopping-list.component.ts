import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DietService } from '../../services/diet.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  private dietService = inject(DietService);
  
  shoppingList = this.dietService.shoppingList;
  
  getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      'Protéines': 'restaurant',
      'Légumes': 'spa',
      'Féculents': 'grain',
      'Produits laitiers': 'water_drop',
      'Fruits': 'local_florist',
      'Pain': 'bakery_dining',
      'Condiments': 'blender'
    };
    
    return iconMap[category] || 'shopping_cart';
  }
}
