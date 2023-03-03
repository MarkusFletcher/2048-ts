export class Tile {
  public $tile: HTMLDivElement | null
  private _value: number
  constructor() {
    this.$tile = document.createElement('div')
    this.$tile.classList.add('tile')
    this.value = 2
  }

  set value(value: number) {
    this._value = value
    this.$tile.textContent = String(value)
  }

  get value() {
    return this._value
  }
}