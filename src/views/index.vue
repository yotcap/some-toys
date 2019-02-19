<template>
  <div class="container">
    <h2>this is toys index.</h2>
    <ol>
      <router-link to="pagination" tag="li" class="t-a">Pagination</router-link>
      <router-link to="/" tag="li" class="t-a">...</router-link>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.container {
  margin: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    padding: 5px 0;
  }
}
</style>
