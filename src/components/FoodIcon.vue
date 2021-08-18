<template>
  <div class="food-icon"></div>
  <div class="food-name">
  <p>{{name}}</p>
  </div>
  
</template>

<script>
export default {
  name: 'FoodIcon',
  props: { name: String }
};
    
</script>

<style scoped>
.food-icon {
    display: flex;
    align-items: flex-end;
    width: 800px;
    height: 700px;
    border: 1px solid grey;
    background-image: url('../assets/chestnuts.png')
}

.food-name {
    color: white;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    width: 100%
}
</style>