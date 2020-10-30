import Vue from 'vue'
import Input from '~/components/common/Input'

const components = { Input }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
