export const Button = ({ color, text, id, top, left }) => {
  const button = document.createElement('span')
  const buttonWrapper = document.createElement('div')

  const backgroundColor = color === 'green' ? '#6ABF4B' : '#3877EE'
  const fadedColor = color === 'green' ? '#6abf4bb3' : '#3877eeb3'

  button.style.backgroundColor = fadedColor
  button.innerText = '+'

  button.classList.add('button')
  button.id = id

  buttonWrapper.append(button)
  buttonWrapper.classList.add('buttonWrapper')

  buttonWrapper.style.top = `${top}%`
  buttonWrapper.style.left = `${left}%`

  const handleClick = () => {
    button.classList.toggle('active')
    button.innerText = button.classList.contains('active') ? text : '+'

    button.style.backgroundColor = button.classList.contains('active') ? backgroundColor : fadedColor
  }

  return {
    id,
    buttonWrapper,
    handleClick,
  }
}
