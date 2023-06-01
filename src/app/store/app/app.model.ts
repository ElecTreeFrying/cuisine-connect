import { UserInfo } from '@angular/fire/auth';

export interface AppStateModel {
  language: Language;
  admin: boolean;
  authenticated: boolean;
  admin_portal: boolean;
  user: any;
  recipes: Recipe[] | null;
  selectedRecipe: Recipe | null;
  cuisineCategories: CuisineCategory[] | null;
  selectedCuisineCategory: CuisineCategory | null;
  userPermissions: UserPermissions[] | null;
}

export type Language = 'en' | 'ru' | 'lv';

export interface UserPermissions {
  uid: string;
  admin: boolean;
  requestTimestamp: number | null;
  creationTime: string;
  lastSignInTime: string;
  user: UserInfo;
}

export interface Recipe {
  uid?: string
  dishName: string;
  ingredients: string[];
  cookingSteps: string[];
  cookingTime: string;
  date: string;
  photo: string;
  nutritionalValue: string[];
  calorieContent: string;
}

export interface CuisineCategory {
  uid?: string
  title: string;
  category: string;
  photo: string;
  date: string;
  details: string;
}

export interface RecipeComment {
  uid?: string
  user: string;
  host: Partial<UserInfo>;
  recipe: string;
  comment: string;
  timestamp: number;
}
