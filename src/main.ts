import './style/reset.css'
import './style/style.css'

import { Grid } from './ts/grid'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="grid"></div>
`

const $grid: HTMLDivElement | null = document.querySelector('.grid')

const grid = new Grid($grid)

console.log(grid)


