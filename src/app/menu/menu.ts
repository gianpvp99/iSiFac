import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Inicio',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: '/home'
  },
  {
    id: 'sample',
    title: 'Muestra',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: '/sample'
  }
]
