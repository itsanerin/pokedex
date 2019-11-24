queryPokemonAPI = async (name) => {
    let req = await fetch(`https://fizal.me/pokeapi/api/v2/name/${name}.json`)
    let data = await req.json()
    let pokemon = new Pokemon(data)
    erin.addPokemonToParty(pokemon)

    console.log(data)

    let pokeGrid = document.getElementById('modal-content')
    let grid = document.createElement('div')
    grid.id = (`stat-grid`)
    pokeGrid.appendChild(grid)

    let nameP = document.createElement('p')
    nameP.innerText = `${erin.party[erin.party.length-1].name}`
    nameP.id = `name`
    grid.appendChild(nameP)

    let idP = document.createElement('p')
    idP.innerText = `#${erin.party[erin.party.length-1].id}`
    idP.id = `idNum`
    grid.appendChild(idP)

    let heightP = document.createElement('p')
    heightP.innerText = `Height: ${Math.floor((erin.party[erin.party.length-1].height * 3.937) / 12)}'${Math.ceil((erin.party[erin.party.length-1].height * 3.937) % 12)}"`
    heightP.id = `height`
    grid.appendChild(heightP)

    let weightP = document.createElement('p')
    weightP.innerText = `Weight: ${Math.ceil(erin.party[erin.party.length-1].weight / 4.536)} lbs`
    weightP.id = `weight`
    grid.appendChild(weightP)

    let hp = document.createElement('p')
    hp.innerText = `HP: ${erin.party[erin.party.length-1].stats.hp}`
    hp.id = `hp`
    grid.appendChild(hp)

    let atk = document.createElement('p')
    atk.innerText = `Attack: ${erin.party[erin.party.length-1].stats.attack}`
    atk.id = 'attack'
    grid.appendChild(atk)

    let def = document.createElement('p')
    def.innerText = `Defense: ${erin.party[erin.party.length-1].stats.defense}`
    def.id = 'defense'
    grid.appendChild(def)

    let sprite = document.createElement('img')
    sprite.src = `${erin.party[erin.party.length - 1].sprite}`
    sprite.id = 'sprite'
    grid.appendChild(sprite)
}

class Pokemon {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.height = data.height
        this.weight = data.weight
        this.stats = {
            hp: data.stats[5].base_stat,
            attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat
        }
        this.abilities = []
        this.types = []
        this.sprite = data.sprites.front_default

        for (let i = 0; i < data.abilities.length; i++) {
            this.abilities.push(data.abilities[i].ability.name)
        }

    }
}

class Trainer {
    constructor() {
        this.party = []
    }

    all = () => {
        return this.party
    }

    get = (name) => {
        for (let i = 0; i < this.party.length; i++) {
            if (name == this.party[i].name) {
                return this.party[i]
            }
        }
    }

    addPokemonToParty(pokemon) {
        if (this.party.length < 6) {
            this.party.push(pokemon)
        }
    }
}

let erin = new Trainer()










// let abilities = document.createElement('p')
// def.innerText = `Abilities: ${erin.party[erin.party.length-1].}`
// def.className = `abilities`
// grid.appendChild(def)