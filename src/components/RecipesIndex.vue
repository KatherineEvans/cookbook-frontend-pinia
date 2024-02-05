<template>
    <div class="container mt-4">
        <div class="row">
            <div v-for="recipe in recipesStore.recipes" class="col-4 mb-4">
                <div class="card p-3" style="width: 18rem;">
                    <img :src="recipe.image_url" class="card-img-top" :alt="recipe.title">
                    <div class="card-body">
                        <h4>{{ recipe.title }}</h4>
                        <p class="card-text">
                            Chef: {{ recipe.chef }}
                        </p>
                    </div>
                    <button @click.prevent="recipesStore.setRecipe(recipe)" class="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useRecipesStore } from '../stores/useRecipesStore.js'
export default {
    data: function () {
        return {
            favorites: []
        };
    },
    computed: {
        ...mapStores(useRecipesStore)
    }
};
</script>  
<style scoped></style>
