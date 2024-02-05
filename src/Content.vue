<template>
    <div class="mt-3" style="min-height: 85vh;">
        <h1 class="text-center">All {{ recipes.length }} Recipes</h1>
        <RecipesIndex :recipes="recipes" @setRecipe="setRecipeModal($event)"/>
        <Modal :recipe="recipe" :show="show" @close="show = false" />
    </div>
</template>
<script>
import axios from 'axios';
import RecipesIndex from './components/RecipesIndex.vue';
import Modal from './components/Modal.vue';

export default {
    components: { RecipesIndex, Modal },
    data: function () {
        return {
            recipes: [],
            show: false,
            recipe: {}
        };
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes(){
            axios.get("http://localhost:3000/recipes.json").then(response => {
                this.recipes = response.data;
            })
        },
        setRecipeModal(data){
            this.recipe = data;
            this.show = true;
        }
    },
};
</script>  
<style scoped></style>
