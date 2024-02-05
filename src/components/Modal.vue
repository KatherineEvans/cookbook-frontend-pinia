<template>
    <div v-if="show" class="modal-background">
        <section class="modal-main">
            <h1 class="mb-4">{{ recipe.title }}</h1>
            <div>
                <h3>Ingredients</h3>
                <ul>
                    <li v-for="ingredient in recipe.ingredients_list">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
            <div>
                <h3>Directions</h3>
                <ul>
                    <li v-for="direction in recipe.directions_list">
                        {{ direction }}
                    </li>
                </ul>
            </div>
            <button class="close" type="button" @click.prevent="$emit('close')">
            &#x2715;
            </button>
        </section>
    </div>
</template>
<script>
export default {
    props: ['show', 'recipe']
}
</script>
<style scoped></style>