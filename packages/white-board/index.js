// 导入组件必须声明name
import WhiteBoard from './src/index.vue'

// 为组件添加install方法，用于按需引入
WhiteBoard.install = function (Vue) {
  Vue.component(WhiteBoard.name, WhiteBoard)
}

export default WhiteBoard
