<template>
    <v-app class="grey lighten-4">
        <!-- <Navbar/> -->
        <router-view></router-view>
    </v-app>
</template>

<script>
// import Navbar from './components/Navbar'
export default {
  name: 'App',
  // components: { Navbar },
  data () {
      return {
      }
  }
}
</script>

<style lang="scss">
</style>