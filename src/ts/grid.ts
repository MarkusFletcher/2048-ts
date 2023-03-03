import { config } from './config'
import { Cell } from './cell'

export class Grid {
  cells: Cell[] = []
  constructor($grid: HTMLDivElement | null) {
    for (let i = 0; i < config.CELLS_COUNT; i++) {
      this.cells.push(new Cell($grid, i % config.GRID_WIDTH, Math.floor(i / config.GRID_HEIGHT), i))
    }
  }
}