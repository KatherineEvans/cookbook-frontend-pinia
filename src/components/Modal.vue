<template>
    <div v-if="recipesStore.show" class="modal-background">
        <section class="modal-main">
            <h1 class="mb-4">{{ recipesStore.recipe.title }}</h1>
            <div>
                <h3>Ingredients</h3>
                <ul>
                    <li v-for="ingredient in recipesStore.recipe.ingredients_list">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
            <div>
                <h3>Directions</h3>
                <ul>
                    <li v-for="direction in recipesStore.recipe.directions_list">
                        {{ direction }}
                    </li>
                </ul>
            </div>
            <button class="close" type="button" @click.prevent="recipesStore.show = false">
            &#x2715;
            </button>
        </section>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useRecipesStore } from '../stores/useRecipesStore.js'

export default {
    computed: {
        ...mapStores(useRecipesStore)
    }
}
</script>
<style scoped></style>