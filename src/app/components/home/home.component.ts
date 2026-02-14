import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DietService } from '../../services/diet.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private dietService = inject(DietService);
  
  weeklyPlan = this.dietService.weeklyPlan;
  
  displayedColumns: string[] = [
    'day',
    'breakfast',
    'morningSnack',
    'lunch',
    'afternoonSnack',
    'dinner',
    'totalFAZ'
  ];
}
