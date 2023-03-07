<template>
  <div class="who-client white-section">
    <div class="who-client__container">
      <h5>Our Clients</h5>
      <div class="who-client-title">
        <div class="who-client-title__container">
          <h2>These are the customers</h2>
        </div>
        <div class="who-client-title__container">
          <h2>who trusted us.</h2>
        </div>
      </div>
      <div class="who-client-list">
        <ul>
          <li v-for="client in this.client" :key="{ client }">
            <img :src="client.imgUrl" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoClient',
  props: {
    client: Array
  }
}
</script>

<style></style>
