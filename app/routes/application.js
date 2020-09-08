import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('recipe') recipeService
  @service('ingredient') ingredientService

  beforeModel() {
    if (!this.ingredientService.loaded) {
      this.ingredientService.add(
        {
          name: `Sugar`
        }
      )
      this.ingredientService.add(
        {
          name: `Eggs`
        }
      )
    }

    !this.recipeService.loaded && this.recipeService.add(
      {
        name: `Lemon drizzle slices`,
        description: `A classic British cake from the Bake Off judge, Paul Hollywood's lemon drizzle is a simple traybake, made extra special with feather icing`,
        numberServings: 12,
        cookingTime: '30min',
      },
      [
        {
          position: 1,
          instructions: 'Heat oven to 180C/160C fan/ gas 4. Line a 20 x 20cm square baking tin with baking parchment.',
          ingredient: this.ingredientService.ingredients.firstObject,
          amountRequired: '2 spons',
        },
        {
          position: 2,
          instructions: 'Using an electric whisk, beat the butter and sugar together until pale, light and fluffy. Add the eggs and mix again. Add the flour, baking powder, lemon zest, lemon curd and milk, and mix with a wooden spoon until all the ingredients are thoroughly combined. Pour the mixture into the prepared tin and bake for 25-30 mins or until a skewer comes out clean.',
          ingredient: this.ingredientService.ingredients.lastObject,
          amountRequired: '10',
        }
      ]
    )
  }
}
