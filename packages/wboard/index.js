// 导入组件必须声明name
import Wboard from './src/index.vue'

// 为组件添加install方法，用于按需引入
Wboard.install = function (Vue) {
  Vue.component(Wboard.name, Wboard)
}

export default Wboard
