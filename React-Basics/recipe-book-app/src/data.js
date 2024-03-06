export const recipes = [
  {
    id: 0,
    recipeName: "Chocolate Chip Cookies",
    description: "A classic and delicious treat!",
    imageUrl: "https://bakerbynature.com/wp-content/uploads/2015/05/IMG_1823-2-copy.jpg",
    ingredients: [
      "1 cup (2 sticks) unsalted butter, softened",
      "1 cup granulated sugar",
      "1 cup packed light brown sugar",
      "2 large eggs",
      "2 teaspoons pure vanilla extract",
      "2 ¾ cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "2 cups semisweet chocolate chips",
    ],
    instructions:
      "Preheat oven to 375 degrees F (190 degrees C). Line baking sheets with parchment paper. In a large bowl, cream together the butter and sugars until light and fluffy. Beat in the eggs one at a time, then stir in the vanilla extract. In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. (The remaining instructions can be added here)",
  },
  {
    id: 1,
    recipeName: "Banana Bread",
    description:
      "A moist and flavorful bread perfect for breakfast or snacking!",
    imageUrl: "https://th.bing.com/th/id/OIP.2QDLd_YRCw6Wqc0xIyamMQHaLH?rs=1&pid=ImgDetMain",
    ingredients: [
      "3 ripe bananas, mashed",
      "1/2 cup (1 stick) unsalted butter, melted",
      "1 cup granulated sugar",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1 1/2 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/2 cup chopped walnuts (optional)",
    ],
    instructions:
      "Preheat oven to 350 degrees F (175 degrees C). Grease a loaf pan. In a large bowl, whisk together the mashed bananas, melted butter, sugar, egg, and vanilla extract. In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Stir in the walnuts, if using. Pour batter into the prepared loaf pan and bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean. Let cool in the pan for 10 minutes before transferring to a wire rack to cool completely.",
  },
  // Add more recipe objects here following the same format
];

localStorage.setItem("RecipeList", JSON.stringify(recipes));
