class Canvas {
  constructor(document, id) {
    this.canvas = document.getElementById(id)
    this.GRID_PIXELS = 8
    this.canvas.width = this.GRID_PIXELS
    this.canvas.height = this.GRID_PIXELS
    this.CANVAS_CSS_WIDTH = 400
    this.CANVAS_CSS_HEIGHT = 400
    this.canvas.style.width = this.CANVAS_CSS_WIDTH
    this.canvas.style.height = this.CANVAS_CSS_HEIGHT
    this.canvasBounding = this.canvas.getBoundingClientRect()
    /** @type {CanvasRenderingContext2D} */
    this.context = this.canvas.getContext('2d')
    this.isDrawing = false

    // this.setListeners()
  }

  setListeners(pixelDrawer) {
    this.canvas.addEventListener('mousedown', event => {
      let originalX = event.clientX - this.canvasBounding.left
      let originalY = event.clientY - this.canvasBounding.top
    
      let mappedX = Math.trunc( originalX * this.GRID_PIXELS / this.CANVAS_CSS_WIDTH )
      let mappedY = Math.trunc( originalY * this.GRID_PIXELS / this.CANVAS_CSS_HEIGHT )
      
      console.log(event.x, event.clientX)
      this.isDrawing = true
      pixelDrawer.draw(mappedX, mappedY)
    })
    
    window.addEventListener('mouseup', event => {
      this.isDrawing = false
    })
    
    window.addEventListener('mousemove', event => {
      let originalX = event.clientX - this.canvasBounding.left
      let originalY = event.clientY - this.canvasBounding.top
    
      let mappedX = Math.trunc( originalX * this.GRID_PIXELS / this.CANVAS_CSS_WIDTH )
      let mappedY = Math.trunc( originalY * this.GRID_PIXELS / this.CANVAS_CSS_HEIGHT )
    
      if (this.isDrawing)
        pixelDrawer.draw(mappedX, mappedY)
    })
  }
}