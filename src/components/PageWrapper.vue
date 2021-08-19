<template>
<div class="food-app-wrapper-container">
<nav>
<router-link exact to="/">Home</router-link>
<router-link exact :to="{ name: 'Favourite'}">Favourites</router-link>
<router-link exact to="/about">About</router-link>
</nav>
<h1>{{title}}</h1>
<h2>{{subtitle}}</h2>
<slot>
<p>Default Wrapper Content</p>
</slot>
<footer>The food app</footer>
</div>
<script>
export default {
    name: 'FoodAppPageWrapper',
    props: {
        title: {
            type: String, 
            default: 'title'
        },
        subtitle: {
            type: String, 
            default: 'subtitle',
        },
    },
};

<style scoped>

.router-link-active {
    background-color: 'green';
    color: black
}
.food-app-wrapper-container {

    color: white;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    width: 100%

}

</style>
</script>
</template>