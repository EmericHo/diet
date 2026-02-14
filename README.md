# Nutrifaz Diet Management Application

A complete Angular 18+ web application for managing weekly Nutrifaz diet plans with Material Design.

## Features

### 📅 Home Page - Weekly Meal Plan
- Interactive table displaying 7 days of meals
- Fixed breakfast: 2 slices whole grain bread + 1 slice ham (2F)
- Morning snack: 1 compote (1Z)
- Lunch: Meal of the day with 1F starch
- Afternoon snack: 1 yogurt + 1 fruit (1Z)
- Dinner: 0F protein and vegetable recipes
- Total FAZ points per person per day

### 🍳 Recipes Page
- 7 unique dinner recipes (0F each)
- All recipes serve 6 portions
- Detailed ingredients (~1.1kg protein, 1.2kg vegetables per recipe)
- Step-by-step preparation instructions
- Prep and cooking times
- Focus on winter vegetables (leeks, cabbage, broccoli, spinach)

### 🛒 Shopping List Page
- Categorized by:
  - Proteins
  - Vegetables
  - Dairy products
  - Starches
  - Bread
  - Fruits
  - Condiments
- Complete quantities for the week
- Checkable items for easy shopping

### 🎨 Design & UX
- Material Design with indigo-pink theme
- Dark/light theme toggle
- Responsive design (mobile-first)
- Side navigation drawer
- Smooth animations

## Technology Stack

- **Framework**: Angular 21.1.4 (18+)
- **UI Library**: Angular Material
- **State Management**: Angular Signals
- **Styling**: SCSS
- **Testing**: Vitest
- **Build Tool**: Angular CLI with esbuild

## Getting Started

### Prerequisites
- Node.js 24.x or higher
- npm 11.x or higher

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
npm test
```

All 33 unit tests cover:
- App component
- Home component
- Recipes component
- Shopping List component
- Diet service

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Weekly meal plan
│   │   ├── recipes/           # Recipe details
│   │   └── shopping-list/     # Shopping list
│   ├── services/
│   │   └── diet.service.ts    # Data management with signals
│   ├── models/
│   │   └── diet.models.ts     # TypeScript interfaces
│   ├── app.ts                 # Main app component
│   ├── app.routes.ts          # Routing configuration
│   └── app.config.ts          # App configuration
├── styles.scss                # Global styles with theme
└── index.html
```

## Features in Detail

### Weekly Plan
- **Fixed Breakfast**: 2F (bread + ham)
- **Morning Snack**: 1Z (compote)
- **Lunch**: 1F (with starch)
- **Afternoon Snack**: 1Z (yogurt + fruit)
- **Dinner**: 0F (protein + vegetables)
- **Total**: 5 FAZ points per day

### Sample Recipes
1. Chicken with Leeks
2. Turkey with Green Cabbage
3. Chicken with Broccoli
4. Turkey with Spinach
5. Chicken with Peppers and Cauliflower
6. Turkey with Green Beans
7. Chicken with Mushrooms and Zucchini

## Contributing

This is a diet management application following the Nutrifaz program guidelines.

## License

This project is licensed under the MIT License.
