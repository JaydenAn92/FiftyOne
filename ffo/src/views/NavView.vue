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
