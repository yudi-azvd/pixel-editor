
const colors = document.querySelectorAll('.colors')
const pixelSizeSetter = document.querySelector('#pixelSizeSetter')
const opacitySetter = document.querySelector('#opacitySetter')

const canvas = new Canvas(document, 'canvas')

const pixelDrawer = new PixelDrawer(canvas.context)

canvas.setListeners(pixelDrawer)


addClickListenersToColors(colors)
addChangeListenerToPixelSizeSetter(pixelSizeSetter)
addChangeListenerToOpacitySetter(opacitySetter)


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


