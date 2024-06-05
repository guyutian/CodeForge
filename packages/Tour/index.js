import Tour from './src/index.vue'

// 为组件添加install方法，用于按需引入
Tour.install = function (Vue) {
  Vue.component(Tour.name, Tour)
}

export default Tour