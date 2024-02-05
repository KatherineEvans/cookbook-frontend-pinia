import { defineStore } from "pinia";
import axios from "axios";

export const useRecipesStore = defineStore("recipes", {
  persist: true,
  state: () => ({
    recipes: [],
    recipe: {},
    show: false,
  }),
  actions: {
    getRecipes() {
      axios.get("http://localhost:3000/recipes.json").then((response) => {
        console.log(response.data, "hello from the store");
        this.recipes = response.data;
      });
    },
    setRecipe(recipe) {
      console.log(recipe, "called Set Recipe");
      this.recipe = recipe;
      this.show = true;
    },
  },
});
