<template>
  <div>
    <h2>404</h2>
    <p>Page Not Found</p>
    <a href="#" @click.prevent="$router.push('/')">Back Home</a>
  </div>
</template>

<script>
export default { name: 'NotFound' }
</script>

<style scoped>
div {
  background: #fff;
  padding: 10% 0;
}
h2 {
  font-size: 250px;
  line-height: 250px;
  font-weight: 700;
  color: #000;
}
p {
  font-size: 56px;
  line-height: 59px;
  color: #000;
  margin-bottom: 50px;
}
a {
  text-decoration: none;
  color: #fff;
  padding: 15px 42px;
  border-radius: 4px;
  background-color: #ff7061;
}
@media only screen and (max-width: 480px) {
  h2 {
    font-size: 150px;
    line-height: 150px;
  }
  p {
    font-size: 32px;
    line-height: 36px;
  }
}
</style>
