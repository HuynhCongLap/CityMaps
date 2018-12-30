<template>
  <div>
  <p><input type="text" placeholder="Nom" v-model="name"></p>
  <p><input type="text" placeholder="Adresse" v-model="address"/></p>
  <button v-on:click="createAddress">Ajouter</button>
  </div>
</template>

<script type = "text/javascript" >

export default {
  data: function () {
    return {
      name: '',
      address: ''
    }
  },
  methods: {
    createAddress: function () {
      const name = this.name
      const address = this.address
      this.$store.dispatch('addAddress', {
        name: name,
        address: address,
        favorite: true
      })
    }
  }
}
</script>
<style>
