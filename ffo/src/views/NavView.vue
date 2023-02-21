<template>
  <div class="nav">
    <h1>This is an Nav page</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/work">Work</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/culture">Culture</router-link> |
      <router-link to="/recruit">Recruit</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavView',
  props: {
    // msg: String
  }
}
</script>

<style>
.nav nav {
  padding: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
}
</style>
