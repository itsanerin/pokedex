pokemon = document.getElementsByClassName("pokemon")

function addClass(selector, myClass) {
  elements = document.querySelectorAll(selector)

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add(myClass)
  }
}

function removeClass(selector, myClass) {
  elements = document.querySelectorAll(selector)

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove(myClass)
  }
}

//When you click on one particular pokemon, set pokemon class to display:none and remove pokemon class from clicked element
class PokeHighlight {
    constructor(name) {
        this.name = name
        this.element = document.getElementById(`${name}`)
        // this.idNum = idNum
    }

    highlight = () => {
        addClass('.pokemon', 'hide')
        removeClass(`#${this.name}`, 'hide')
        addClass(`#${this.name}`, 'show')
    }
}

let kyogre = new PokeHighlight("kyogre")
let garchomp = new PokeHighlight("garchomp")
let gyarados = new PokeHighlight("gyarados")
let vaporeon = new PokeHighlight("vaporeon")
let feralgatr = new PokeHighlight("feralgatr")
let blastoise = new PokeHighlight("blastoise")