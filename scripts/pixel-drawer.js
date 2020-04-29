class PixelDrawer {
  constructor(context, defaultColor = '#000') {
    this.context = context
    this.context.fillStyle = defaultColor
    this.size = 1
  }

  setColor(color) {
    this.context.fillStyle = color
  }

  setSize(size) {
    this.size = size
  }

  setOpacity(opacity) {
    this.context.globalAlpha = opacity
  }

  draw(x, y) {
    this.context.fillRect(x, y, this.size, this.size)
  }
}
