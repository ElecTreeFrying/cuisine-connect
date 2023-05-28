import { CuisineCategory, Recipe } from "./firestore"

export const cuisineCategories: CuisineCategory[] = [
  {
    title: 'Breakfast',
    category: 'Cuisine Category',
    photo: 'assets/breakfast.jpg',
    date: '2023-05-21T12:57:44.717Z',
    details: 'Breakfast is a meal that is typically consumed in the morning to break the overnight fasting period and provide nourishment to start the day. It is considered the first meal of the day and is widely regarded as an important and energizing meal.'
  },
  {
    title: 'Lunch',
    category: 'Cuisine Category',
    photo: 'assets/lunch.webp',
    date: '2023-05-21T12:57:44.717Z',
    details: 'Lunch is a midday meal that is typically consumed during the break between morning and afternoon activities. It serves as a refueling opportunity and a chance to take a break from daily tasks, providing sustenance and a chance to recharge for the rest of the day.'
  },
  {
    title: 'Dinner',
    category: 'Cuisine Category',
    photo: 'assets/dinner.jpg',
    date: '2023-05-21T12:57:44.717Z',
    details: 'Dinner is a meal that is typically consumed in the evening or late afternoon, serving as the final substantial meal of the day. It is a significant mealtime where individuals and families gather to enjoy a variety of dishes and unwind after a busy day.'
  },
  {
    title: 'Desert',
    category: 'Cuisine Category',
    photo: 'assets/dessert.jpg',
    date: '2023-05-21T12:57:44.717Z',
    details: 'Desert, often referred to as "dessert," is a cuisine category that encompasses a wide variety of sweet and indulgent dishes typically consumed after a meal. Desserts are known for their delectable flavors, textures, and decorative presentations that can bring a delightful and satisfying end to a dining experience.'
  }
]

export const recipes: Recipe[] = [
  {
    dishName: 'Beef Bourguignon',
    ingredients: [
      '2 pounds (900g) beef stew meat, cut into chunks',
      '4 slices bacon, diced',
      '1 onion, chopped',
      '2 carrots, sliced',
      '2 cloves garlic, minced',
      '1 tablespoon all-purpose flour',
      '2 cups red wine (such as Burgundy)',
      '2 cups beef broth',
      '1 tablespoon tomato paste',
      '1 teaspoon dried thyme',
      '2 bay leaves',
      'Salt and pepper to taste',
      '1 pound (450g) mushrooms, quartered',
      'Fresh parsley, chopped (for garnish)'
    ],
    cookingSteps: [
      'In a large pot or Dutch oven, cook the bacon over medium heat until crispy. Remove the bacon and set aside, leaving the drippings in the pot.',
      'In the same pot, brown the beef chunks in the bacon drippings over medium-high heat. Remove the beef and set aside.',
      'Add the onion, carrots, and garlic to the pot. Cook until the onion is translucent.',
      'Sprinkle flour over the vegetables and stir to coat evenly.',
      'Pour in the red wine, beef broth, and add the tomato paste, thyme, bay leaves, salt, and pepper. Stir well.',
      'Return the beef and bacon to the pot. Bring to a boil, then reduce the heat to low. Cover and simmer for about 2 hours or until the beef is tender.',
      'In a separate pan, sauté the mushrooms until browned. Add them to the pot with the beef bourguignon and stir.',
      'Simmer for an additional 30 minutes to allow the flavors to meld.',
      'Remove the bay leaves and adjust the seasoning if needed.',
      'Serve the Beef Bourguignon hot, garnished with fresh chopped parsley.'
    ],
    cookingTime: '2 hours 30 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg',
    calorieContent: 'Approximately 400-500 calories per serving (may vary based on portion size and specific ingredients used)',
    nutritionalValue: [
      "Total Fat: Approximately 20-25g",
      "Saturated Fat: Approximately 7-10g",
      "Cholesterol: Approximately 70-90mg",
      "Sodium: Approximately 600-800mg",
      "Carbohydrates: Approximately 15-20g",
      "Fiber: Approximately 2-4g",
      "Sugars: Approximately 4-6g",
      "Protein: Approximately 30-35g"
    ]
  },
  {
    dishName: 'Beef Stroganoff',
    ingredients: [
      '500g beef fillet, thinly sliced',
      '1 onion, finely chopped',
      '2 cloves of garlic, minced',
      '200g mushrooms, sliced',
      '2 tablespoons butter',
      '1 cup beef broth',
      '1 cup sour cream',
      '2 tablespoons all-purpose flour',
      '2 tablespoons Dijon mustard',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    cookingSteps: [
      'In a large skillet, melt the butter over medium heat.',
      'Add the onions and garlic to the skillet and sauté until softened.',
      'Add the beef slices and cook until browned. Remove the beef from the skillet and set aside.',
      'In the same skillet, add the mushrooms and cook until they release their moisture and become golden brown.',
      'Sprinkle the flour over the mushrooms and stir well to combine.',
      'Gradually add the beef broth while stirring constantly to create a smooth sauce.',
      'Return the beef to the skillet and simmer for about 5 minutes to allow the flavors to meld.',
      'Stir in the sour cream and Dijon mustard. Season with salt and pepper to taste.',
      'Cook for an additional 2-3 minutes until heated through.',
      'Serve the Beef Stroganoff over cooked noodles or rice.',
      'Garnish with fresh parsley before serving.'
    ],
    cookingTime: '30 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.foodandwine.com/thmb/YlvSkk7fsIGE8ywW-bT7Pal9Wh8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-beef-stroganoff-hero-06-5dc1fb98ed9f4eea97bab613d212eead.jpg',
    calorieContent: 'Approximately 350-400 calories per serving',
    nutritionalValue: [
      "Protein: Beef is a good source of protein. The dish contains protein from the beef slices and sour cream.",
      "Fat: The dish contains fat from the beef, butter, and sour cream. The amount of fat will depend on the specific cuts of beef and the type of sour cream used.",
      "Carbohydrates: The dish contains carbohydrates from the onions, mushrooms, flour, and any added noodles or rice. The amount of carbohydrates will vary depending on the serving size and additional ingredients used.",
      "Fiber: The dish may contain a small amount of dietary fiber from the onions and mushrooms.",
      "Vitamins and Minerals: The dish may provide various vitamins and minerals, including vitamin C, vitamin D, iron, and potassium. The specific amounts will depend on the ingredients used and their nutritional composition."
    ]
  },
  {
    dishName: 'Spaghetti Carbonara',
    ingredients: [
      '200g spaghetti',
      '100g pancetta or bacon, diced',
      '2 large eggs',
      '50g grated Parmesan cheese',
      'Salt and black pepper to taste',
      'Chopped parsley for garnish (optional)'
    ],
    cookingSteps: [
      'Cook the spaghetti according to package instructions until al dente. Drain and set aside.',
      'In a large skillet, cook the pancetta or bacon over medium heat until crispy. Remove from heat and set aside.',
      'In a bowl, whisk together the eggs, Parmesan cheese, salt, and black pepper.',
      'Add the cooked spaghetti to the skillet with the pancetta or bacon. Pour the egg mixture over the spaghetti while stirring constantly to coat the pasta.',
      'Continue cooking over low heat for a couple of minutes until the sauce thickens and coats the pasta.',
      'Remove from heat and let it rest for a minute.',
      'Serve the Spaghetti Carbonara hot, garnished with chopped parsley if desired.'
    ],
    cookingTime: '20 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
    calorieContent: 'Approximately 1194 calories',
    nutritionalValue: [
      "Carbohydrates: Approximately 75g",
      "Protein: Approximately 46g",
      "Fat: Approximately 60g",
      "Sodium: Approximately 1950mg",
      "Calcium: Approximately 380mg"
    ]
  },
  {
    dishName: 'Chicken Cordon Bleu',
    ingredients: [
      '2 boneless, skinless chicken breasts',
      '4 slices ham',
      '4 slices Swiss cheese',
      '1/2 cup all-purpose flour',
      '1/2 cup breadcrumbs',
      '1/4 cup grated Parmesan cheese',
      '1/2 teaspoon garlic powder',
      '1/2 teaspoon paprika',
      '2 eggs, beaten',
      'Salt and pepper to taste',
      '2 tablespoons vegetable oil'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'Place each chicken breast between two sheets of plastic wrap and pound with a meat mallet until about 1/4 inch thick.',
      'Season the chicken breasts with salt and pepper.',
      'Place 2 slices of ham and 2 slices of Swiss cheese on each chicken breast.',
      'Roll up the chicken breasts, tucking in the sides to enclose the filling. Secure with toothpicks if needed.',
      'In a shallow dish, combine the flour, breadcrumbs, grated Parmesan cheese, garlic powder, paprika, salt, and pepper.',
      'Dip each chicken roll in the beaten eggs, then coat with the breadcrumb mixture, pressing gently to adhere.',
      'In a large oven-safe skillet, heat the vegetable oil over medium-high heat.',
      'Add the chicken rolls to the skillet and cook until browned on all sides, about 5 minutes.',
      'Transfer the skillet to the preheated oven and bake for 20-25 minutes or until the chicken is cooked through and the cheese is melted and bubbly.',
      'Remove from the oven and let the chicken rest for a few minutes before serving.',
      'Serve the Chicken Cordon Bleu hot, sliced into medallions, and enjoy!'
    ],
    cookingTime: '45 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.cookingclassy.com/wp-content/uploads/2022/12/chicken-cordon-bleu-26.jpg',
    calorieContent: 'Approximately 450-500 calories per serving',
    nutritionalValue: [
      "Protein: 35-40 grams",
      "Fat: 20-25 grams",
      "Carbohydrates: 30-35 grams",
      "Fiber: 1-2 grams",
      "Sugar: 1-2 grams",
      "Sodium: 900-1000 milligrams"
    ]
  },
  {
    dishName: 'Spanakopita',
    ingredients: [
      '1 pound (450g) spinach, washed and chopped',
      '1 cup feta cheese, crumbled',
      '1/2 cup ricotta cheese',
      '1/2 cup chopped green onions',
      '2 cloves garlic, minced',
      '1/4 cup chopped fresh dill',
      '1/4 cup chopped fresh parsley',
      '3 eggs, lightly beaten',
      'Salt and pepper to taste',
      '1/2 cup (1 stick) unsalted butter, melted',
      '10 sheets phyllo pastry, thawed'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'In a large bowl, combine the spinach, feta cheese, ricotta cheese, green onions, garlic, dill, parsley, eggs, salt, and pepper. Mix well.',
      'Brush a baking dish with melted butter.',
      'Layer 5 sheets of phyllo pastry in the baking dish, brushing each sheet with melted butter before adding the next one.',
      'Spread the spinach and cheese mixture evenly over the phyllo pastry.',
      'Layer the remaining 5 sheets of phyllo pastry on top, again brushing each sheet with melted butter.',
      'Trim any excess phyllo pastry hanging over the edges of the dish and tuck it into the sides.',
      'Brush the top layer of phyllo pastry with melted butter.',
      'Using a sharp knife, score the top layer of phyllo pastry into squares or triangles.',
      'Bake in the preheated oven for about 35-40 minutes or until the phyllo pastry is golden brown and crispy.',
      'Remove from the oven and let it cool slightly before serving.',
      'Spanakopita can be served warm or at room temperature.'
    ],
    cookingTime: '1 hour',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.365daysofbakingandmore.com/wp-content/uploads/2015/11/Spanakopita-1.jpg',
    calorieContent: 'Approximately 2,000 calories',
    nutritionalValue: [
      "Fat: Spanakopita is a rich dish, with a significant amount of fat coming from feta cheese, ricotta cheese, and butter. It also contains some healthy fats from spinach and eggs.",
      "Protein: Spanakopita is a good source of protein due to the presence of feta cheese, ricotta cheese, and eggs.",
      "Carbohydrates: Phyllo pastry provides the main source of carbohydrates in Spanakopita.",
      "Fiber: Spinach is a good source of dietary fiber.",
      "Vitamins and Minerals: Spanakopita contains various vitamins and minerals from ingredients such as spinach, garlic, dill, parsley, and eggs."
    ]
  },
  {
    dishName: 'Paella',
    ingredients: [
      '1 1/2 cups (300g) paella rice',
      '4 cups (950ml) chicken broth',
      '1 onion, diced',
      '1 bell pepper, diced',
      '2 cloves garlic, minced',
      '2 tomatoes, diced',
      '1/2 pound (225g) chicken thighs, boneless and skinless, cut into bite-sized pieces',
      '1/2 pound (225g) large shrimp, peeled and deveined',
      '1/2 pound (225g) mussels, cleaned and debearded',
      '1/2 cup (120ml) white wine',
      '1 teaspoon paprika',
      '1/2 teaspoon saffron threads',
      '1/2 cup (120ml) olive oil',
      'Salt and pepper to taste',
      'Fresh parsley, chopped (for garnish)',
      'Lemon wedges (for serving)'
    ],
    cookingSteps: [
      'In a paella pan or large skillet, heat the olive oil over medium heat.',
      'Add the diced onion and bell pepper to the pan. Sauté until they begin to soften.',
      'Add the minced garlic and diced tomatoes to the pan. Cook for a few minutes until the tomatoes start to break down.',
      'Add the chicken pieces to the pan. Cook until they are browned on all sides.',
      'Sprinkle paprika and saffron threads over the ingredients in the pan. Stir well to coat everything.',
      'Pour in the white wine and let it simmer for a couple of minutes.',
      'Add the paella rice to the pan and stir to coat it with the flavors.',
      'Pour in the chicken broth and season with salt and pepper. Stir gently to distribute the ingredients evenly.',
      'Reduce the heat to low and let the paella simmer for about 20 minutes or until the rice is cooked and the liquid is absorbed. Avoid stirring the rice while it cooks.',
      'Arrange the shrimp and mussels over the top of the rice. Cover the pan and cook for an additional 5 minutes or until the shrimp is cooked and the mussels have opened.',
      'Remove the paella from the heat and let it rest, covered, for a few minutes.',
      'Garnish with fresh chopped parsley and serve the Paella with lemon wedges on the side.'
    ],
    cookingTime: '45 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2012/07/paella-9174.jpg',
    calorieContent: 'Around 500-600 calories per serving',
    nutritionalValue: [
      "Carbohydrates: Approximately 60-70 grams",
      "Protein: Approximately 25-30 grams",
      "Fat: Approximately 15-20 grams",
      "Fiber: Approximately 3-5 grams",
      "Sodium: Approximately 700-900 milligrams"
    ]
  },
  {
    dishName: 'Moussaka',
    ingredients: [
      '2 large eggplants',
      '1 pound (450g) ground lamb',
      '1 onion, finely chopped',
      '3 cloves garlic, minced',
      '1 can (14 ounces) diced tomatoes',
      '1/4 cup tomato paste',
      '1 teaspoon dried oregano',
      '1/2 teaspoon ground cinnamon',
      'Salt and pepper to taste',
      '4 tablespoons olive oil',
      '1/4 cup all-purpose flour',
      '2 cups milk',
      '1/2 cup grated Parmesan cheese',
      '1/4 teaspoon ground nutmeg',
      '1 egg, beaten',
      'Breadcrumbs (for sprinkling)'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'Slice the eggplants into 1/4-inch thick rounds. Sprinkle salt over the eggplant slices and let them sit for 30 minutes to release excess moisture. Rinse the slices and pat them dry.',
      'Heat 2 tablespoons of olive oil in a large skillet over medium heat. Add the ground lamb, chopped onion, and minced garlic. Cook until the lamb is browned and the onion is softened.',
      'Stir in the diced tomatoes, tomato paste, dried oregano, ground cinnamon, salt, and pepper. Simmer for about 10 minutes until the flavors are well combined. Remove from heat and set aside.',
      'In a separate saucepan, heat the remaining 2 tablespoons of olive oil over medium heat. Stir in the flour and cook for about 1 minute.',
      'Gradually whisk in the milk until the mixture thickens and comes to a simmer. Remove from heat and stir in the grated Parmesan cheese, ground nutmeg, and beaten egg. Set aside.',
      'Grease a baking dish with olive oil. Arrange a layer of eggplant slices on the bottom of the dish, followed by a layer of the lamb mixture. Repeat the layers until all ingredients are used, ending with a layer of eggplant slices on top.',
      'Pour the milk mixture evenly over the top layer of eggplant. Sprinkle breadcrumbs over the surface.',
      'Bake in the preheated oven for about 45 minutes or until the top is golden brown and bubbling.',
      'Remove from the oven and let it cool for a few minutes before serving.',
      'Serve the Moussaka warm and enjoy!'
    ],
    cookingTime: '1 hour 30 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://img.delicious.com.au/-JtzyjeV/del/2018/05/spiced-mushroom-moussaka-with-haloumi-bechamel-80336-2.jpg',
    calorieContent: 'Approximately 2,000-2,500 calories',
    nutritionalValue: [
      "Calories: Around 330-420 calories per serving",
      "Protein: Approximately 18-24 grams",
      "Carbohydrates: Approximately 20-30 grams",
      "Fat: Approximately 20-25 grams",
      "Fiber: Approximately 5-8 grams"
    ]
  },
  {
    dishName: 'Chicken Parmesan',
    ingredients: [
      '4 boneless, skinless chicken breasts',
      '1 cup breadcrumbs',
      '1/2 cup grated Parmesan cheese',
      '1/2 teaspoon dried basil',
      '1/2 teaspoon dried oregano',
      'Salt and pepper to taste',
      '2 eggs, beaten',
      '1 cup marinara sauce',
      '1 cup shredded mozzarella cheese',
      'Fresh basil leaves (for garnish)',
      'Cooked spaghetti (for serving)'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'In a shallow dish, combine the breadcrumbs, grated Parmesan cheese, dried basil, dried oregano, salt, and pepper.',
      'Dip each chicken breast into the beaten eggs, then coat with the breadcrumb mixture, pressing lightly to adhere.',
      'In a large skillet, heat olive oil over medium heat. Brown the chicken breasts on both sides until golden.',
      'Transfer the browned chicken breasts to a baking dish. Pour marinara sauce over the chicken.',
      'Sprinkle shredded mozzarella cheese over the sauce.',
      'Bake in the preheated oven for about 20-25 minutes, or until the chicken is cooked through and the cheese is melted and bubbly.',
      'Garnish with fresh basil leaves before serving.',
      'Serve the Chicken Parmesan over cooked spaghetti or with a side of your choice.'
    ],
    cookingTime: '45 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.southernliving.com/thmb/rQaGDkAPGa_MeU4eglrAaeuexjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-chicken-parmesan-ddmfs-0047-fe218cb392784e79bfb4bb586685d6f9.jpg',
    calorieContent: 'Approximately 1530 to 2010 calories per serving.',
    nutritionalValue: [
      "Protein: Chicken is a good source of protein.",
      "Carbohydrates: Breadcrumbs and spaghetti contribute to the carbohydrate content.",
      "Fat: Parmesan cheese, mozzarella cheese, and cooking oil contribute to the fat content.",
      "Fiber: The dish is not particularly high in fiber.",
      "Vitamins and Minerals: The dish contains some vitamins and minerals, including calcium from the cheese and various nutrients from the chicken and other ingredients."
    ]
  },
  {
    dishName: 'Borscht',
    ingredients: [
      '2 tablespoons olive oil',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 beets, peeled and grated',
      '3 potatoes, peeled and diced',
      '4 cups vegetable or beef broth',
      '2 cups shredded cabbage',
      '1 can (14 ounces) diced tomatoes',
      '2 cloves garlic, minced',
      '2 tablespoons apple cider vinegar',
      '1 tablespoon sugar',
      'Salt and pepper to taste',
      'Sour cream (for serving)',
      'Fresh dill, chopped (for garnish)'
    ],
    cookingSteps: [
      'In a large pot, heat the olive oil over medium heat. Add the chopped onion and diced carrots. Sauté until the vegetables are softened.',
      'Add the grated beets and diced potatoes to the pot. Stir well to combine.',
      'Pour in the vegetable or beef broth. Bring the mixture to a boil, then reduce the heat and simmer for about 20 minutes or until the vegetables are tender.',
      'Stir in the shredded cabbage, diced tomatoes, minced garlic, apple cider vinegar, and sugar. Season with salt and pepper.',
      'Simmer the soup for an additional 10 minutes to allow the flavors to meld together.',
      'Taste and adjust the seasoning if needed.',
      'Serve the Borscht hot, topped with a dollop of sour cream and a sprinkle of fresh chopped dill.',
      'Enjoy the Borscht as a hearty and flavorful soup!'
    ],
    cookingTime: '45 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/190226-borscht-137-1552084904.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    calorieContent: 'Approximately 250-300 calories per serving (assuming 4-6 servings)',
    nutritionalValue: [
      "Fat: Approximately 10-15 grams",
      "Carbohydrates: Approximately 35-40 grams",
      "Protein: Approximately 5-8 grams",
      "Fiber: Approximately 5-8 grams"
    ]
  },
  {
    dishName: 'Greek Salad',
    ingredients: [
      '4 cups chopped romaine lettuce',
      '1 cucumber, diced',
      '1 bell pepper, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, thinly sliced',
      '1/2 cup Kalamata olives',
      '1/2 cup crumbled feta cheese',
      '2 tablespoons extra virgin olive oil',
      '1 tablespoon red wine vinegar',
      '1 teaspoon dried oregano',
      'Salt and pepper to taste'
    ],
    cookingSteps: [
      'In a large bowl, combine the chopped romaine lettuce, diced cucumber, diced bell pepper, cherry tomatoes, sliced red onion, Kalamata olives, and crumbled feta cheese.',
      'In a small bowl, whisk together the extra virgin olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.',
      'Drizzle the dressing over the salad ingredients in the large bowl.',
      'Toss the salad gently to coat the ingredients with the dressing.',
      'Taste and adjust the seasoning if needed.',
      'Serve the Greek Salad as a refreshing and vibrant side dish or add grilled chicken or shrimp for a complete meal.',
      'Enjoy the flavors of the Mediterranean!'
    ],
    cookingTime: '15 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-4.jpg',
    calorieContent: 'Around 210-250 calories per serving.',
    nutritionalValue: [
      "Total Fat: 16-18 grams",
      "Saturated Fat: 4-6 grams",
      "Cholesterol: 15-20 milligrams",
      "Sodium: 450-500 milligrams",
      "Total Carbohydrate: 12-15 grams",
      "Dietary Fiber: 4-5 grams",
      "Sugars: 6-8 grams",
      "Protein: 4-6 grams",
      "Vitamin A: 80-100% of the Daily Value (DV)",
      "Vitamin C: 90-110% of the DV",
      "Calcium: 15-20% of the DV",
      "Iron: 6-8% of the DV"
    ]
  },
  {
    dishName: 'Ratatouille',
    ingredients: [
      '1 eggplant, diced',
      '2 zucchini, diced',
      '1 red bell pepper, diced',
      '1 yellow bell pepper, diced',
      '1 onion, chopped',
      '3 cloves garlic, minced',
      '3 tomatoes, diced',
      '2 tablespoons tomato paste',
      '1/4 cup olive oil',
      '1 teaspoon dried thyme',
      '1 teaspoon dried oregano',
      'Salt and pepper to taste',
      'Fresh basil leaves (for garnish)'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'In a large skillet, heat olive oil over medium heat. Add the chopped onion and minced garlic. Sauté until the onion is translucent.',
      'Add the diced eggplant, diced zucchini, diced red and yellow bell peppers to the skillet. Cook for a few minutes until the vegetables start to soften.',
      'Stir in the diced tomatoes, tomato paste, dried thyme, dried oregano, salt, and pepper. Mix well to combine.',
      'Transfer the mixture to a baking dish and spread it evenly.',
      'Bake in the preheated oven for about 30-40 minutes or until the vegetables are tender and slightly caramelized.',
      'Garnish with fresh basil leaves before serving.',
      'Serve the Ratatouille hot as a side dish or as a main course with crusty bread or rice.',
      'Enjoy the flavorful and colorful medley of vegetables!'
    ],
    cookingTime: '1 hour',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.sprinklesandsprouts.com/wp-content/uploads/2022/04/RatatouilleSQ.jpg',
    calorieContent: 'Approximately 150-200 calories per serving',
    nutritionalValue: [
      "Carbohydrates: Approximately 20-25 grams",
      "Protein: Approximately 3-5 grams",
      "Fat: Approximately 8-10 grams",
      "Fiber: Approximately 6-8 grams",
      "Vitamin A: Rich in vitamin A, especially from the bell peppers and tomatoes.",
      "Vitamin C: Good source of vitamin C, mainly from the bell peppers and tomatoes.",
      "Potassium: Contains a moderate amount of potassium from the vegetables.",
      "Other essential vitamins and minerals: Ratatouille also provides smaller amounts of vitamin K, vitamin B6, folate, and various minerals like manganese and magnesium."
    ]
  },
  {
    dishName: 'Tiramisu',
    ingredients: [
      '1 cup brewed strong coffee, cooled',
      '2 tablespoons coffee liqueur (such as Kahlua)',
      '24 ladyfingers',
      '4 egg yolks',
      '1/2 cup granulated sugar',
      '1 cup mascarpone cheese',
      '1 cup heavy cream',
      'Cocoa powder, for dusting',
      'Dark chocolate shavings, for garnish'
    ],
    cookingSteps: [
      'In a shallow dish, combine the cooled brewed coffee and coffee liqueur.',
      'Dip each ladyfinger into the coffee mixture, soaking them for a few seconds on each side. Arrange the soaked ladyfingers in a single layer in a rectangular serving dish.',
      'In a mixing bowl, beat the egg yolks and granulated sugar together until pale and creamy.',
      'Add the mascarpone cheese to the bowl and beat until smooth and well combined.',
      'In a separate bowl, whip the heavy cream until stiff peaks form.',
      'Gently fold the whipped cream into the mascarpone mixture until fully incorporated.',
      'Spread half of the mascarpone cream mixture over the layer of soaked ladyfingers in the serving dish.',
      'Arrange another layer of soaked ladyfingers on top of the cream layer.',
      'Spread the remaining mascarpone cream mixture over the second layer of soaked ladyfingers.',
      'Cover the dish with plastic wrap and refrigerate for at least 4 hours, or overnight, to allow the flavors to meld together and the tiramisu to set.',
      'Before serving, dust the top of the tiramisu with cocoa powder and garnish with dark chocolate shavings.',
      'Slice and serve the Tiramisu chilled, enjoying the creamy and indulgent Italian dessert!'
    ],
    cookingTime: '4 hours',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://i.shgcdn.com/269063bf-d72d-41dd-b848-9b30657696e6/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    calorieContent: 'Around 300-400 calories.',
    nutritionalValue: [
      "Protein: 5-8 grams",
      "Fat: 20-30 grams",
      "Carbohydrates: 20-30 grams",
      "Fiber: 0-2 grams",
      "Sugar: 10-20 grams",
      "Sodium: 30-60 milligrams",
      "Cholesterol: 150-250 milligrams"
    ]
  },
  {
    dishName: 'Quiche Lorraine',
    ingredients: [
      '1 pre-made pie crust',
      '6 slices bacon, cooked and crumbled',
      '1 cup shredded Swiss cheese',
      '1/2 cup chopped onion',
      '4 eggs',
      '1 cup heavy cream',
      'Salt and pepper to taste',
      'Pinch of nutmeg'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'Place the pre-made pie crust in a pie dish, pressing it firmly against the bottom and sides of the dish.',
      'Sprinkle the cooked and crumbled bacon, shredded Swiss cheese, and chopped onion evenly over the pie crust.',
      'In a mixing bowl, whisk together the eggs, heavy cream, salt, pepper, and nutmeg.',
      'Pour the egg mixture over the bacon, cheese, and onion in the pie crust.',
      'Bake in the preheated oven for about 30-35 minutes or until the quiche is set and the top is golden brown.',
      'Remove the quiche from the oven and let it cool for a few minutes before slicing.',
      'Serve the Quiche Lorraine warm or at room temperature for a delicious breakfast, brunch, or lunch option.',
      'Enjoy the rich and savory flavors of this classic French dish!'
    ],
    cookingTime: '40 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://media.houseandgarden.co.uk/photos/6189479a8373470f8394e2e1/3:2/w_1920,h_1280,c_limit/mary-berry-vogue-2-25jun13-pr_bt.jpg',
    calorieContent: 'Approximately 450-500 calories per serving',
    nutritionalValue: [
      "Total Fat: Approximately 35-40 grams",
      "Saturated Fat: Approximately 16-20 grams",
      "Cholesterol: Approximately 230-250 milligrams",
      "Sodium: Approximately 500-600 milligrams",
      "Carbohydrates: Approximately 15-20 grams",
      "Fiber: Approximately 1 gram",
      "Sugar: Approximately 2 grams",
      "Protein: Approximately 15-20 grams"
    ]
  },
  {
    dishName: 'Fish and Chips',
    ingredients: [
      '1 pound white fish fillets (such as cod or haddock)',
      '1 cup all-purpose flour',
      '1 teaspoon baking powder',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1 cup cold sparkling water',
      'Vegetable oil (for frying)',
      '4 large potatoes, cut into thick fries',
      'Salt (for seasoning)'
    ],
    cookingSteps: [
      'Preheat the oven to 400°F (200°C).',
      'In a large bowl, whisk together the all-purpose flour, baking powder, salt, and black pepper.',
      'Gradually pour in the cold sparkling water while whisking until the batter is smooth and lump-free.',
      'Heat vegetable oil in a deep fryer or large skillet to about 375°F (190°C).',
      'Dip each fish fillet into the batter, allowing any excess to drip off.',
      'Carefully place the battered fish into the hot oil and fry until golden and crispy, turning once. This usually takes about 4-5 minutes per side, depending on the thickness of the fillets.',
      'Remove the fried fish from the oil and transfer them to a paper towel-lined plate to drain excess oil.',
      'Meanwhile, spread the potato fries in a single layer on a baking sheet. Drizzle with olive oil and season with salt.',
      'Bake the fries in the preheated oven for about 30-35 minutes or until crispy and golden brown.',
      'Remove the fries from the oven and sprinkle with additional salt if desired.',
      'Serve the Fish and Chips hot with a side of tartar sauce, ketchup, or malt vinegar.',
      'Enjoy this classic British dish with its crispy fish and perfectly cooked chips!'
    ],
    cookingTime: '45 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.thespruceeats.com/thmb/k8Ejnb3LR7yrhwGirJEC2x6r1sg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-fish-and-chips-recipe-434856-Hero-5b61b89346e0fb00500f2141.jpg',
    calorieContent: 'Approximately 800-1200 calories.',
    nutritionalValue: [
      "Protein: Fish is a good source of protein, providing around 20-30 grams per serving.",
      "Fat: The amount of fat can vary depending on the type of fish and the frying method. Fish itself is relatively low in fat, but the batter and frying process can add significant fat content. A serving of Fish and Chips can contain around 30-60 grams of fat.",
      "Carbohydrates: The carbohydrate content mainly comes from the potatoes used for the fries. A serving of Fish and Chips may contain around 80-100 grams of carbohydrates.",
      "Fiber: The fiber content in Fish and Chips is typically low, as fish and fried potatoes are not significant sources of dietary fiber.",
      "Sodium: The sodium content can be relatively high due to the use of salt in the batter, seasoning, and frying process. A serving of Fish and Chips can contain several hundred milligrams to over a thousand milligrams of sodium."
    ]
  },
  {
    dishName: 'Goulash',
    ingredients: [
      '2 pounds beef chuck, cut into bite-sized pieces',
      '2 onions, chopped',
      '2 cloves garlic, minced',
      '2 red bell peppers, diced',
      '2 tablespoons paprika',
      '1 teaspoon caraway seeds',
      '1 can (14 ounces) diced tomatoes',
      '2 cups beef broth',
      '1 tablespoon tomato paste',
      '2 tablespoons vegetable oil',
      'Salt and pepper to taste',
      'Sour cream (for serving)',
      'Fresh parsley, chopped (for garnish)',
      'Cooked egg noodles or mashed potatoes (for serving)'
    ],
    cookingSteps: [
      'In a large Dutch oven or pot, heat the vegetable oil over medium heat.',
      'Add the chopped onions and minced garlic. Sauté until the onions are soft and translucent.',
      'Add the beef chuck to the pot and cook until browned on all sides.',
      'Stir in the diced red bell peppers, paprika, caraway seeds, salt, and pepper. Cook for a couple of minutes to release the flavors.',
      'Add the diced tomatoes, beef broth, and tomato paste to the pot. Stir to combine.',
      'Bring the mixture to a boil, then reduce the heat to low and cover the pot.',
      'Simmer the Goulash for about 2-3 hours or until the beef is tender and the flavors have melded together.',
      'Taste and adjust the seasoning if needed.',
      'Serve the Goulash hot over cooked egg noodles or mashed potatoes.',
      'Garnish with a dollop of sour cream and a sprinkle of chopped fresh parsley.',
      'Enjoy the rich and hearty flavors of this Hungarian classic!'
    ],
    cookingTime: '3 hours 30 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://img.delicious.com.au/d65smTMv/w1200/del/2015/10/goulash-soup-15708-2.jpg',
    calorieContent: 'Approximately 350-400 calories per serving',
    nutritionalValue: [
      "Fat: Approximately 20-25 grams",
      "Carbohydrates: Approximately 15-20 grams",
      "Protein: Approximately 25-30 grams",
      "Fiber: Approximately 3-5 grams",
      "Sodium: Approximately 800-1000 milligrams"
    ]
  },
  {
    dishName: 'Shepherd\'s Pie',
    ingredients: [
      '1 pound ground lamb or beef',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 cloves garlic, minced',
      '1 cup frozen peas',
      '2 tablespoons tomato paste',
      '1 cup beef broth',
      '1 teaspoon Worcestershire sauce',
      '1 teaspoon dried thyme',
      'Salt and pepper to taste',
      '4 cups mashed potatoes',
      '1/2 cup shredded cheddar cheese',
      'Fresh parsley, chopped (for garnish)'
    ],
    cookingSteps: [
      'Preheat the oven to 375°F (190°C).',
      'In a large skillet, cook the ground lamb or beef over medium heat until browned. Drain any excess fat.',
      'Add the chopped onion, diced carrots, and minced garlic to the skillet. Sauté until the vegetables are softened.',
      'Stir in the frozen peas, tomato paste, beef broth, Worcestershire sauce, dried thyme, salt, and pepper. Simmer for a few minutes to combine the flavors.',
      'Transfer the meat and vegetable mixture to a greased baking dish.',
      'Spread the mashed potatoes evenly over the top of the meat mixture.',
      'Sprinkle the shredded cheddar cheese on top of the mashed potatoes.',
      'Bake in the preheated oven for about 25-30 minutes or until the cheese is melted and bubbly.',
      'Garnish with chopped fresh parsley before serving.',
      'Serve the Shepherd\'s Pie hot as a comforting and filling meal.',
      'Enjoy the delicious combination of meat, vegetables, and creamy mashed potatoes!'
    ],
    cookingTime: '45 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/05/1517424592-shepherds-pie-delish-2.jpg?crop=0.418xw:0.627xh;0.439xw,0.310xh&resize=1200:*',
    calorieContent: 'Approximately 450-550 calories per serving',
    nutritionalValue: [
      "Fat: 20-30 grams",
      "Saturated Fat: 9-15 grams",
      "Cholesterol: 60-80 milligrams",
      "Carbohydrates: 40-50 grams",
      "Fiber: 4-6 grams",
      "Sugar: 5-8 grams",
      "Protein: 20-25 grams",
      "Sodium: 600-800 milligrams"
    ]
  },
  {
    dishName: 'Wiener Schnitzel',
    ingredients: [
      '4 veal cutlets or boneless pork chops',
      '1 cup all-purpose flour',
      '2 large eggs, beaten',
      '1 cup breadcrumbs',
      'Salt and pepper to taste',
      'Vegetable oil (for frying)',
      'Lemon wedges (for serving)',
      'Fresh parsley, chopped (for garnish)'
    ],
    cookingSteps: [
      'Place the veal cutlets or pork chops between two sheets of plastic wrap. Pound them with a meat mallet or rolling pin until they are thin and evenly flattened.',
      'Season the cutlets or chops with salt and pepper.',
      'Set up a breading station with three shallow bowls. Fill one bowl with the all-purpose flour, another with the beaten eggs, and the third with the breadcrumbs.',
      'Dip each cutlet or chop into the flour, shaking off any excess. Then dip it into the beaten eggs, allowing any excess to drip off. Finally, coat it in the breadcrumbs, pressing lightly to adhere.',
      'Heat vegetable oil in a large skillet over medium heat. The oil should be about 1/4 inch deep.',
      'Carefully place the breaded cutlets or chops into the hot oil. Fry them for about 3-4 minutes per side or until golden brown and crispy.',
      'Remove the Wiener Schnitzel from the oil and transfer them to a paper towel-lined plate to drain excess oil.',
      'Serve the Wiener Schnitzel hot with lemon wedges and a sprinkle of chopped fresh parsley.',
      'Enjoy this classic Austrian dish that is crispy on the outside and tender on the inside!'
    ],
    cookingTime: '30 minutes',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.thespruceeats.com/thmb/BS5BdyQsGh5qQyRiuZMannmcxoY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-wiener-schnitzel-recipe-1447089-hero-02-18827aac4cbd4aec926350d4f9778e70.jpg',
    calorieContent: 'Around 400-500 calories',
    nutritionalValue: [
      "Protein: Approximately 30-40 grams",
      "Carbohydrates: About 20-30 grams",
      "Fat: Around 20-30 grams",
      "Sodium: Varies depending on the amount of salt used in the recipe"
    ]
  },
  {
    dishName: 'Chicken Paprikash',
    ingredients: [
      '2 pounds chicken pieces (such as thighs and drumsticks)',
      '2 tablespoons vegetable oil',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      '2 tablespoons sweet paprika',
      '1 cup chicken broth',
      '1 cup sour cream',
      'Salt and pepper to taste',
      'Fresh parsley, chopped (for garnish)',
      'Cooked egg noodles or rice (for serving)'
    ],
    cookingSteps: [
      'In a large skillet or Dutch oven, heat the vegetable oil over medium heat.',
      'Add the chicken pieces to the skillet and brown them on all sides. Remove the chicken and set aside.',
      'In the same skillet, sauté the chopped onion and minced garlic until they are softened and fragrant.',
      'Stir in the sweet paprika, coating the onions and garlic.',
      'Return the chicken to the skillet and pour in the chicken broth. Season with salt and pepper.',
      'Cover the skillet and simmer over low heat for about 45 minutes or until the chicken is cooked through and tender.',
      'Remove the chicken from the skillet and set aside.',
      'Whisk the sour cream into the skillet, stirring until it is well combined with the sauce.',
      'Return the chicken to the skillet and simmer for an additional 5 minutes to heat through.',
      'Garnish with chopped fresh parsley and serve the Chicken Paprikash over cooked egg noodles or rice.',
      'Enjoy this Hungarian dish that is creamy, flavorful, and comforting!'
    ],
    cookingTime: '1 hour',
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.simplyrecipes.com/thmb/f6HW-phiUsfMqysRnTKLbVscGhI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__03__chicken-paprikash-horiz-c-1400-323c87eb90484db0b1d3bb1b9863917b.jpg',
    calorieContent: 'Approximately 400-500 calories.',
    nutritionalValue: [
      "Fat: 25-30 grams",
      "Carbohydrates: 20-30 grams",
      "Protein: 20-30 grams",
      "Sodium: 600-800 milligrams",
      "Fiber: 2-4 grams",
      "Vitamin A: 10-15% of the recommended daily intake",
      "Vitamin C: 4-8% of the recommended daily intake",
      "Calcium: 6-8% of the recommended daily intake",
      "Iron: 10-15% of the recommended daily intake"
    ]
  },
  {
    dishName: "Pad Thai",
    ingredients: [
      "8 ounces rice noodles",
      "2 tablespoons vegetable oil",
      "2 cloves garlic, minced",
      "1/2 cup firm tofu, diced",
      "2 eggs, beaten",
      "1 cup shrimp, peeled and deveined",
      "1 cup bean sprouts",
      "2 green onions, sliced",
      "2 tablespoons fish sauce",
      "2 tablespoons tamarind paste",
      "1 tablespoon sugar",
      "1/4 cup crushed peanuts",
      "Lime wedges (for serving)",
      "Fresh cilantro (for garnish)"
    ],
    cookingSteps: [
      "Soak the rice noodles in warm water for about 10 minutes or until they are softened. Drain and set aside.",
      "In a wok or large skillet, heat the vegetable oil over medium heat.",
      "Add the minced garlic and diced tofu to the wok. Sauté until the tofu is golden brown.",
      "Push the tofu to one side of the wok and pour the beaten eggs into the other side. Scramble the eggs until they are cooked through.",
      "Add the shrimp to the wok and cook until they are pink and cooked through.",
      "Stir in the soaked rice noodles, bean sprouts, and sliced green onions.",
      "In a small bowl, whisk together the fish sauce, tamarind paste, and sugar. Pour the sauce mixture over the noodles and toss to coat everything evenly.",
      "Continue cooking for a few more minutes or until the noodles are heated through.",
      "Remove the Pad Thai from the heat and sprinkle with crushed peanuts.",
      "Serve the Pad Thai hot with lime wedges on the side and garnish with fresh cilantro.",
      "Enjoy this popular Thai stir-fried noodle dish that is packed with flavors and textures!"
    ],
    cookingTime: "30 minutes",
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.feastingathome.com/wp-content/uploads/2016/04/pad-thai-2.jpg',
    calorieContent: 'Approximately 400-500 calories per serving',
    nutritionalValue: [
      "Total Fat: Around 10-15 grams",
      "Saturated Fat: Approximately 2-4 grams",
      "Cholesterol: Around 150-200 milligrams",
      "Carbohydrates: Approximately 60-70 grams",
      "Fiber: Around 2-4 grams",
      "Sugar: Approximately 5-8 grams",
      "Protein: Around 15-20 grams",
      "Sodium: Approximately 800-1200 milligrams"
    ]
  },
  {
    dishName: "Chicken Teriyaki",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "Salt and pepper to taste",
      "1/2 cup soy sauce",
      "1/4 cup mirin",
      "2 tablespoons sake",
      "2 tablespoons honey",
      "2 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 tablespoon cornstarch",
      "2 tablespoons water",
      "2 green onions, sliced",
      "Toasted sesame seeds (for garnish)",
      "Steamed rice (for serving)"
    ],
    cookingSteps: [
      "Season the chicken breasts with salt and pepper on both sides.",
      "In a small saucepan, combine the soy sauce, mirin, sake, honey, minced garlic, and grated ginger. Bring the mixture to a simmer over medium heat.",
      "Add the chicken breasts to the saucepan and cook for about 6-8 minutes on each side or until they are cooked through.",
      "While the chicken is cooking, prepare a slurry by whisking together the cornstarch and water in a small bowl.",
      "Remove the cooked chicken from the saucepan and set aside. Pour the slurry into the saucepan and whisk until the sauce thickens.",
      "Slice the cooked chicken into strips and return them to the saucepan. Toss the chicken in the thickened teriyaki sauce to coat.",
      "Remove the Chicken Teriyaki from the heat and garnish with sliced green onions and toasted sesame seeds.",
      "Serve the Chicken Teriyaki hot over steamed rice.",
      "Enjoy this classic Japanese dish that features tender and flavorful chicken in a sweet and savory teriyaki sauce!"
    ],
    cookingTime: "30 minutes",
    date: '2023-05-21T12:57:44.717Z',
    photo: 'https://www.budgetbytes.com/wp-content/uploads/2022/04/Teriyaki-Chicken-plate.jpg',
    calorieContent: 'Approximately 300-350 calories per serving',
    nutritionalValue: [
      "Protein: Approximately 25-30 grams",
      "Fat: Approximately 5-10 grams",
      "Carbohydrates: Approximately 30-35 grams",
      "Fiber: Approximately 1-2 grams",
      "Sugar: Approximately 15-20 grams"
    ]
  }
]
