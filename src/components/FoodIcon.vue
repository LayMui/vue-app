<template>
  <div class="food-icon">
    <FavouriteWidget class="fav-widget"
    :initial_value='is_fav'
    v-on:toggle="toggle($event)"/>
    <div class="food-name">
        <p>{{name}}</p>
    </div>
  </div>
  
</template>

<script>
import FavouriteWidget from './FavouriteWidget.vue';
export default {
  name: 'FoodIcon',
  props: { 
      name: {
      default: 'Food name',
      type: String,
      validator(n) {return n.length > 2;},
    },
    is_fav: {
        type: Boolean,
        default: false,
    },
  },
  components: {
      FavouriteWidget
  },
  methods: {
      toggle(value) {
          console.log(value);
      }
  },
}
    
 
</script>


<style scoped>
.food-icon {
    display: flex;
    align-items: flex-end;
    width: 800px;
    height: 700px;
    border: 1px solid grey;
    background-image: url('')
}

.fav-widget {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 100px;

}
.food-name {
    color: white;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    width: 100%
}
</style>