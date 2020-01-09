<template>
  <div id="app">
    <!--    <top-nav-bar />-->
    <div class="router">
      <router-view />
    </div>
  </div>
</template>
<script>

// import TopNavBar from './components/TopNavBar'

export default {
  name: 'App',
  components: {
    // TopNavBar

  },
  methods: {}
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
    #app {
      min-height: 1080px;
      width: 100%;
      background-color: rgb(241, 242, 244);
    }
</style>
