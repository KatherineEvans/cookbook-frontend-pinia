<template>
    <div class="mt-3" style="min-height: 85vh;">
        <h1 class="text-center">All {{ recipes.length }} Recipes</h1>
        <RecipesIndex :recipes="recipes"/>
    </div>
</template>
<script>
import axios from 'axios';
import RecipesIndex from './components/RecipesIndex.vue';
export default {
    components: { RecipesIndex },
    data: function () {
        return {
            recipes: []
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
        }
    },
};
</script>  
<style scoped></style>
