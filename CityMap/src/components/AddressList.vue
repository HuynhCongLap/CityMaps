<template>
  <div>
    <div class='' v-for="address in addresses" v-bind:key="address.name ">
      <div class='content'>
        <address-item v-bind:address="address"></address-item>
        <div class='meta'>

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" >
import AddressItem from './AddressItem'
export default {
  //  props: ['addresses'],
  components: {
    AddressItem
  },
  computed: {
    addresses: function () {
      return this.$store.getters.addresses
    }
  }
}
</script>
