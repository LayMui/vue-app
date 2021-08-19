<template>
  <div class="food-icon"
    :title="tooltip"
    :style="generatedFoodIconStyle"
    :class="generatedFoodIconClasses">
    <img :src="image"/>
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
    description: {
        type: String,
    },
    group: {
        type: String,
        validator(group) {return ['fruits', 'vegetables', 'grains', 'meats', 'dairy'].indexOf(group) !== -1;}
    },
    image: {
        type: String,
        require: true
    }
  },
  components: {
      FavouriteWidget
  },
  methods: {
      toggle(value) {
          console.log(value);
      }
  },
  computed: {
      tooltip() {
          return `${this.name} - ${this.description || 'no description provided'}`
      },
      generatedFoodIconStyle() {
          return {
              backgroundImage: `url('${this.image}')`
          };
      },
      generateFoodIconClasses() {
          const classes = {};
          classes[`food-group`] = true; 
          classes[`food-group-${this.group}`] = true;
          return classes;
      },
  }
}
    
</script>


<style scoped lang="scss">

$food-group-highlight-border: 5px solid black;

.food-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 200px;
    border: 1px solid grey;
    background-image: url('../assets/placeholder.png');
    margin: 0px 10px;
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

.food-group {
    box-shadow: 5px 5px white;
}

.food-group-fruits {
    border-left: $food-group-highlight-border;
    border-color: red;
}

.food-group-vegetables {
    border-left: $food-group-highlight-border;
    border-left:  green;
}

</style>