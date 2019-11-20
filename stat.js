queryPokemonAPI = async (name) => {
    let req = await fetch(`https://fizal.me/pokeapi/api/v2/name/${name}.json`)
    let data = await req.json()
    let pokemon = document.getElementsByClassName('')

    console.log(data)

    pokeGrid = document.getElementById('container')
    let grid = document.createElement('div')
    grid.className = ('stat-grid')
    grid.id = `${data.name}-grid`
    pokeGrid.appendChild(grid)
    pokeGrid.style = 'grid-template: auto / auto auto;'
    pokeGrid.style = 'grid-template-areas: "pokemon" "stats";'

    let nameP = document.createElement('p')
    nameP.innerText = `${data.name.charAt(0).toUpperCase()}`
    nameP.className = `name`
    document.getElementById(`${data.name}-grid`).appendChild(nameP)

    let idP = document.createElement('p')
    idP.innerText = `#${data.id}`
    idP.className = `idNum`
    document.getElementById(`${data.name}-grid`).appendChild(idP)

    let heightP = document.createElement('p')
    heightP.innerText = `Height: ${Math.floor((data.height * 3.937) / 12)}'${Math.ceil((data.height * 3.937) % 12)}"`
    heightP.className = `height`
    document.getElementById(`${data.name}-grid`).appendChild(heightP)

    let weightP = document.createElement('p')
    weightP.innerText = `Weight: ${Math.ceil(data.weight / 4.536)} lbs`
    weightP.className = `weight`
    document.getElementById(`${data.name}-grid`).appendChild(weightP)

    let hp = document.createElement('p')
    hp.innerText = `HP: ${data.stats[5].base_stat}`
    hp.className = `hp`
    document.getElementById(`${data.name}-grid`).appendChild(hp)

    let atk = document.createElement('p')
    atk.innerText = `Attack: ${data.stats[4].base_stat}`
    atk.className = `atk`
    document.getElementById(`${data.name}-grid`).appendChild(atk)

    let def = document.createElement('p')
    def.innerText = `Defense: ${data.stats[3].base_stat}`
    def.className = `def`
    document.getElementById(`${data.name}-grid`).appendChild(def)

    // let abilities = document.createElement('p')
    // def.innerText = `Abilities: ${data.}`
    // def.className = `def`
    // document.getElementById(`${data.name}-grid`).appendChild(def)
}