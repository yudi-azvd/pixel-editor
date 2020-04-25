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

const canvas = document.getElementById('canvas')
const colors = document.querySelectorAll('.colors')
const pixelSizeSetter = document.querySelector('#pixelSizeSetter')
const opacitySetter = document.querySelector('#opacitySetter')

addClickListenersToColors(colors)
addChangeListenerToPixelSizeSetter(pixelSizeSetter)
addChangeListenerToOpacitySetter(opacitySetter)

/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d')

const PIXELS = 32
canvas.width = PIXELS
canvas.height = PIXELS

const CANVAS_WIDTH = 400
canvas.style.width = CANVAS_WIDTH
canvas.style.height = CANVAS_WIDTH

let canvasBounding = canvas.getBoundingClientRect()

let isDrawing = false

const pixelDrawer = new PixelDrawer(context)

canvas.addEventListener('mousedown', event => {
  originalX = event.clientX - canvasBounding.left
  originalY = event.clientY - canvasBounding.top

  mappedX = Math.trunc( originalX * PIXELS / CANVAS_WIDTH )
  mappedY = Math.trunc( originalY * PIXELS / CANVAS_WIDTH )

  isDrawing = true
  pixelDrawer.draw(mappedX, mappedY)
})

window.addEventListener('mouseup', event => {
  isDrawing = false
})

window.addEventListener('mousemove', event => {
  originalX = event.clientX - canvasBounding.left
  originalY = event.clientY - canvasBounding.top

  mappedX = Math.trunc( originalX * PIXELS / CANVAS_WIDTH )
  mappedY = Math.trunc( originalY * PIXELS / CANVAS_WIDTH )

  if (isDrawing)
    pixelDrawer.draw(mappedX, mappedY)

})

function addClickListenersToColors(colors) {
  colors.forEach(color => {
    color.addEventListener('click', (event) => {
      const colorCode = event.target.style.background 
      pixelDrawer.setColor(colorCode)
    })
  });
}

function addChangeListenerToPixelSizeSetter(pixelSizeSetter) {
  pixelSizeSetter.addEventListener('mouseup', (event) => {
    pixelDrawer.setSize(Number(event.target.value))
  })
}

function addChangeListenerToOpacitySetter(opacitySetter) {
  opacitySetter.addEventListener('mouseup', (event) => {
    pixelDrawer.setOpacity(Number(event.target.value))
  })
}


