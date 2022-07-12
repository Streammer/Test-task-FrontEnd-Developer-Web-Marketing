import image from './img/1.jpg'
import './styles/main.scss'

console.log("Hello world")


const heading = document.createElement('h1')
heading.textContent = 'Hello world!'

// создание свойства класса без конструктора
class Game {
    name = 'Violin Charades'
}
const myGame = new Game()
    // создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const img = document.createElement('img')
img.src = image
// add titlte in the DOM
const root = document.querySelector('#root')
root.append(heading, p)