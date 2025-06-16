import type { App } from 'vue'

export * from './components'
import * as Components from './components'

function install(app: App) {
  for (const component in Components) {
    app.component(component, Components[component as keyof typeof Components] as any)
  }
}

const ZwWidget = {
  install,
}

export default ZwWidget
