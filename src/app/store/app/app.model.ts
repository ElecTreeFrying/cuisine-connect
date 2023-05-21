export interface AppStateModel {
  admin: boolean;
  authenticated: boolean;
  recipes: Recipe[] | null;
}

export interface Recipe {
  dishName: string;
  ingredients: string[];
  cookingSteps: string[];
  cookingTime: string;
  date: string;
  photo: string;
}
