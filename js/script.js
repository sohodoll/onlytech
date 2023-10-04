import { objectsMap } from './data.js'
import { Button } from './Button.js'

const wrapper = document.querySelector('.wrapper')

// iterating over the objectsMap array and creating a new Button object for each object in the array
const buttons = objectsMap.map((object) => {
  return Button(object)
})

// appending each button to the DOM
buttons.forEach((button) => {
  wrapper.append(button.buttonWrapper)
})

window.addEventListener('click', (e) => {
  //finding the right button and firing the handle click function
  const button = buttons.find((button) => button.id === e.target.id)
  if (button) {
    button.handleClick()
  }
})
