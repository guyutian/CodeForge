// 导入单个文件
import WhiteBoard from '../packages/white-board/index'
import Tour from '../packages/Tour/index'

// 以数组结构保存组件，便于遍历
const components = [
  WhiteBoard,
  Tour
]

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}


