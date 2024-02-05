<template>
    <div class="mt-3" style="min-height: 85vh;">
        <h1 class="text-center">All {{ recipesStore.recipes.length }} Recipes</h1>
        <RecipesIndex />
        <Modal />
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useRecipesStore } from './stores/useRecipesStore.js'
import RecipesIndex from './components/RecipesIndex.vue';
import Modal from './components/Modal.vue';

export default {
    components: { RecipesIndex, Modal },
    mounted() {
        this.recipesStore.getRecipes();
    },
    computed: {
        ...mapStores(useRecipesStore)
    }
};
</script>  
<style scoped></style>
