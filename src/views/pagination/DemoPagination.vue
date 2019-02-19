<template>
  <div class="container">
    <pagination
      :pageIndex="pageIndex"
      :total="total"
      :pageSize="pageSize"
      :pShowNum="pShowNum"
      @goPage="goPage"
    >
    ></pagination>
  </div>
</template>
<script>
import Pagination from './Pagination'

export default {
  name: 'DemoPagination',
  data () {
    return {
      pageIndex: 1, // 当前页面
      total: 100, // 数据总数
      pageSize: 10, // 每页数据的数量
      pShowNum: 3 // 可见页面数
    }
  },
  methods: {
    goPage (index) {
      this.pageIndex = index
    }
  },
  components: {
    Pagination
  }
}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
