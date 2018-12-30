<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Start searching</h2>

    <form action="/action_page.php">
    Depart:<br>
    <input type="text" name="depart">
    <br>
    Arrive:<br>
    <input type="text" name="arrive">
    <br><br>
    <input type="submit" value="Search">
    </form>

  </div>
</template>

<script>
export default {
  name: 'Transit',
  data () {
    return {
      msg: 'Welcome to Lyon transit page'
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
