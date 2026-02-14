import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { DietService } from '../../services/diet.service';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideAnimations(),
        DietService
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display weekly plan from service', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component.weeklyPlan()).toBeDefined();
    expect(component.weeklyPlan().length).toBe(7);
  });

  it('should render table with 7 columns', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.displayedColumns.length).toBe(7);
    expect(component.displayedColumns).toContain('day');
    expect(component.displayedColumns).toContain('breakfast');
    expect(component.displayedColumns).toContain('dinner');
    expect(component.displayedColumns).toContain('totalFAZ');
  });

  it('should render weekly plan title', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Plan Hebdomadaire Nutrifaz');
  });
});
