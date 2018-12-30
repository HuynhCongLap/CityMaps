<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Choose one function</h2>
    <router-link to="/transit">Transit</router-link>
    <router-link to="/aroundme">Around Me</router-link>
    <router-link to="/myaddresses">My Addresses</router-link>

  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Home page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
