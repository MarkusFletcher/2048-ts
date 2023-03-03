import { Tile } from './tile'

export class Cell {
  private $cell: HTMLDivElement | null
  private _x: number
  private _y: number
  private _idx: number
  private _linkedTile: Tile | undefined

  constructor($grid: HTMLDivElement | null, x: number, y: number, idx: number) {
    this.$cell = document.createElement('div')
    this.$cell.classList.add('cell')
    $grid?.append(this.$cell)
    this._x = x
    this._y = y
    this._idx = idx
    this.linkTile(new Tile())
  }

  public linkTile(tile: Tile) {
    this._linkedTile = tile
    this.$cell?.append(tile.$tile)
  }

  public get x() {
    return this._x
  }

  public get y() {
    return this._y
  }

  public get idx() {
    return this._idx
  }
}