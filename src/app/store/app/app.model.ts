export interface AppStateModel {
  language: Language;
  admin: boolean;
  authenticated: boolean;
  admin_portal: boolean;
  user: any;
  recipes: Recipe[] | null;
  cuisineCategories: CuisineCategory[] | null;
}

export type Language = 'en' | 'ru' | 'lv';

export interface UserPermissions {
  uid: string;
  admin: boolean;
  requestTimestamp: string;
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
