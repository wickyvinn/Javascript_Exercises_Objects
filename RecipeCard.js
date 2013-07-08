
var recipeBook = [
{
  name: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
},
{
    name: 'Frozen Chocolate Banana',
    servings: 2,
    ingredients: ['chocolate', 'banana']
}];

function printRecipe(recipe) {
    console.log(recipe.name);
    console.log("Serves: " + recipe.servings);
    console.log("Ingredients:");
    for (var ingredient in recipe.ingredients) {
        console.log(recipe.ingredients[ingredient]);
    }
};

for (var i = 0; i < recipeBook.length; i++) {
	printRecipe(recipeBook[i]);
}
