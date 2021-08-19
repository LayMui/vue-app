<template>
  <div class=food-homepage-container>
  <FoodAppPageWrapper :title="title" :subtitle="description"></FoodAppPageWrapper>
  <h1>{{title}}</h1>
  <p>{{description}}</p>
  <div class="food-items">
  <FoodIcon 
    class="food-icon" v-for="f in foods" :key="f.id"
    :name='f.name'
    :is_fav='f.is_fav'
    :image='f.image'
    :description='f.description'
    :group='f.group' />
  </div>
  </div>
</template>

<script>

import FoodIcon from './FoodIcon.vue';
import FoodAppPageWrapper from './PageWrapper.vue';

export default {
    name: 'HomePage', 
    data: function() {
        return {
            title: 'The Food App',
            description: 'Find out all about different food and put together your fav. meals',
             foods: [
            { id: 100, 
              name: 'apple', 
              description: 'red and crunchy', 
              src: '../assets/apple.png', 
              is_fav:false,
              group: 'fruits'
            },
            { id: 101, 
              name: 'banana', 
              description: 'yellow and soft', 
              src: '../assets/banana.png', 
              is_fav:true,
              group: 'fruits'
              },
              { id: 102, 
                name: 'orange', 
                description: 'sweet and juicy', 
                src: '../assets/orange.png', 
                is_fav:true,
                group: 'fruits'
               },
               { id: 103, 
                 name: 'chestnut', 
                 description: 'delightful soft', 
                 src: '../assets/chestnuts.png', 
                 is_fav:true,
                 groups: 'fruits'},
        ]
           
        }
    },
    components: {
        FoodIcon,
        FoodAppPageWrapper
    }
};
</script>

<style scoped>
.food-items .food-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 200px;
    border: 1px solid grey;
    background-image: url('../assets/placeholder.png');
    margin: 0px 10px;
}

</style>
