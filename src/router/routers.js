import Main from '@/views/index.vue'

export const routers = [
  {
    path: '/',
    name: 'index',
    title: 'index',
    component: Main
  },
  {
    path: '/pagination',
    name: 'pagination',
    title: 'pagination',
    component: resolve => { require(['@/views/pagination/DemoPagination.vue'], resolve); }
  }
]