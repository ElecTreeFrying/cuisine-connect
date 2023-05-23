export interface AppStateModel {
  admin: boolean;
  authenticated: boolean;
  recipes: Recipe[] | null;
  cuisineCategories: CuisineCategory[] | null;
}

export interface UserPermissions {
  uid: string;
  admin: boolean;
  requestTimestamp: string;
}

export interface Recipe {
  dishName: string;
  ingredients: string[];
  cookingSteps: string[];
  cookingTime: string;
  date: string;
  photo: string;
}

export interface CuisineCategory {
  title: string;
  category: string;
  photo: string;
  date: string;
  details: string;
}
