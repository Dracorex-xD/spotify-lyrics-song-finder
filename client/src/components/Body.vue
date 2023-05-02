<template>
    <div class="appBody">
      <searchbar />
      <DropList />
      <img src="../assets/Lyna_Perez.jpg" alt="a sexy body">
    </div>
</template>

<script>
import Searchbar from './Searchbar.vue'
import DropList from './DropdownList.vue';

export default {
  name: 'appBody',
  components: {
    Searchbar,
    DropList
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 30vh;
    width: 25vh;
  }
</style>
