<template>
  <div class="home">
   <section class="section1">
      <div class="container-fluid">
        <h1>1</h1>
    </div>
   </section>
   <section class="section1">
      <div class="container-fluid">
        <h1>2</h1>
    </div>
   </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title:'Home',
      msg: 'Welcome to 8bar App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "home.scss";
</style>
