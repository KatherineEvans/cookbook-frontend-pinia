<template>
    <div class="container mt-4">
        <div class="row">
            <div v-for="recipe in recipes" class="col-4 mb-4">
                <div class="card p-3" style="width: 18rem;">
                    <img :src="recipe.image_url" class="card-img-top" :alt="recipe.title">
                    <div class="card-body">
                        <h4>{{ recipe.title }}</h4>
                        <p class="card-text">
                            Chef: {{ recipe.chef }}
                        </p>
                    </div>
                    <button @click.prevent="$emit('setRecipe', recipe)" class="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['recipes'],
    data: function () {
        return {
            favorites: []
        };
    },
};
</script>  
<style scoped></style>
