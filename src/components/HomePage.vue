<template>
  <div class=food-homepage-container>
  <h1>The Food App</h1>
  <p>Find out all about different foods and put together your favourite meal here!</p>
  <div class=food-items>
  <FoodIcon :name='foods[3].name'/>
  </div>
  </div>
</template>

<script>

import FoodIcon from './FoodIcon.vue';

export default {
    name: 'HomePage', 
    data: function() {
        return {
            title: 'The Food App',
            description: 'Find out all about different food and put together your fav. meals',
             foods: [
            { name: 'apple', description: 'red and crunchy', src: '../assets/apple.png', percent_carbs: 96, is_fav:false},
            { name: 'banana', description: 'yellow and soft', src: '../assets/banana.png', percent_carbs: 93, is_fav:true},
            { name: 'orange', description: 'sweet and juicy', src: '../assets/orange.png', percent_carbs: 53, is_fav:true},
            { name: 'chestnut', description: 'delightful soft', src: '../assets/chestnuts.png', percent_carbs: 72, is_fav:true},
        ]
           
        }
    },
    components: {
        FoodIcon
    }
};
</script>

<style scoped>
</style>
