import { Component } from '@angular/core';

import { imports, viewProviders } from './homepage.config';

interface FoodCategories {
  title: string;
  category: string;
  photo: string;
  details: string;
}
const foodCategories: FoodCategories[] = [
  {
    title: 'Breakfast',
    category: 'Cuisine Category',
    photo: 'assets/breakfast.jpg',
    details: 'Breakfast is a meal that is typically consumed in the morning to break the overnight fasting period and provide nourishment to start the day. It is considered the first meal of the day and is widely regarded as an important and energizing meal.'
  },
  {
    title: 'Lunch',
    category: 'Cuisine Category',
    photo: 'assets/lunch.webp',
    details: 'Lunch is a midday meal that is typically consumed during the break between morning and afternoon activities. It serves as a refueling opportunity and a chance to take a break from daily tasks, providing sustenance and a chance to recharge for the rest of the day.'
  },
  {
    title: 'Dinner',
    category: 'Cuisine Category',
    photo: 'assets/dinner.jpg',
    details: 'Dinner is a meal that is typically consumed in the evening or late afternoon, serving as the final substantial meal of the day. It is a significant mealtime where individuals and families gather to enjoy a variety of dishes and unwind after a busy day.'
  },
  {
    title: 'Desert',
    category: 'Cuisine Category',
    photo: 'assets/dessert.jpg',
    details: 'Desert, often referred to as "dessert," is a cuisine category that encompasses a wide variety of sweet and indulgent dishes typically consumed after a meal. Desserts are known for their delectable flavors, textures, and decorative presentations that can bring a delightful and satisfying end to a dining experience.'
  }
]

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true, imports, viewProviders
})
export class HomepageComponent {

  foodCategories: FoodCategories[] = foodCategories;

}
