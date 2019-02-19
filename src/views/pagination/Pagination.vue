<template>
  <div class="container">
    <ul class="p-ul">
      <li @click="goPrev">{{left}}</li>
      <li v-if="isPrevMoreShow">...</li>
      <li
        :class="['li-hover', {'active': currentPage === item}]"
        v-for="item of pages"
        :key="item"
        @click="go(item)"
      >{{ item }}</li>
      <li v-if="isNextMoreShow">...</li>
      <li @click="goNext">{{right}}</li>
    </ul>
    <span>共 {{ pagesTotal }} 页，共 {{ total }} 条数据，每页 {{ pageSize }} 条数据</span>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  data () {
    return {
      // currentPage: 1,
      left: '<',
      right: '>'
    }
  },
  methods: {
    go (index) {
      this.$emit('goPage', index)
    },
    goPrev () {
      if (this.currentPage === 1) {
        this.$emit('goPage', 1)
      } else {
        this.$emit('goPage', this.currentPage - 1)
      }
    },
    goNext () {
      if (this.currentPage === this.pagesTotal) {
        this.$emit('goPage', this.pagesTotal)
      } else {
        this.$emit('goPage', this.currentPage + 1)
      }
    }
  },
  computed: {
    // 得到总页数
    pagesTotal () {
      return Math.ceil(this.total / this.pageSize)
    },
    // 得到可见页
    pages () {
      let offset = (this.pShowNum - 1) / 2
      let header = this.pageIndex - offset
      let footer = this.pageIndex + offset
      let arr = []
      if (header < 1) { // 可见页 头部 小于1
        header = 1
        footer += offset
      }
      if (footer > this.pagesTotal) { // 可见页尾部 大于 总的可见页
        footer = this.pagesTotal
        header -= offset
      }
      if (header < 1) { // 避免 头部 小于1
        header = 1
      }
      for (let i = header; i <= footer; i++) {
        arr.push(i)
      }
      return arr
    },
    isPrevMoreShow () {
      return (this.pages[0] > 1)
    },
    isNextMoreShow () {
      return (this.pages[this.pages.length - 1] < this.pagesTotal)
    },
    // 更新当前页
    currentPage () {
      return this.pageIndex
    }
  },
  watch: {
    // 更新当前页
    // currentPage () {
    //   console.log("updata")
    //   this.currentPage = this.pageIndex
    // }
  },
  mounted () {
  },
  props: {
    pageIndex: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pShowNum: {
      type: Number,
      default: 3
    }
  }
}
</script>
<style lang="less" scoped>

@liSize: 35px;  // 大小
.container {
  display: flex;
  flex-direction: column;
  span {
    margin: 20px 0 0 0;
    font-size: 12px;
    color: #777;
  }
}
.p-ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  li {
    min-width: @liSize;
    min-height: @liSize;
    margin: 5px;
    padding: 5px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:hover {
      cursor: pointer;
      background: rgba(0, 100, 255, 1);
    }
  }
}
.active {
  background: rgba(0, 100, 255, .7);
}
</style>
