<template>
  <div id="app">
    <li class="nav-item">
  <router-link class="nav-link" to="/">Home</router-link>
</li>
<li class="nav-item">
  <router-link class="nav-link" to="/bikecheck">bikecheck</router-link>
 </li>
 <li class="nav-item">
  <router-link class="nav-link" to="/shop">shop</router-link>
 </li>
 <li class="nav-item">
  <router-link class="nav-link" to="/stream">stream</router-link>
 </li>
 

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
 
}
</style>
