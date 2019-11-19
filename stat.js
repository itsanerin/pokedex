queryPokemonAPI = async (name) => {
    let req = await fetch(`https://fizal.me/pokeapi/api/v2/name/${name}.json`)
    let data = await req.json()
console.log(data.height)

    let grid = document.createElement('div')
    grid.className = ('stat-grid')
    grid.id = `${data.name}-grid`
    document.body.appendChild(grid)

    let nameP = document.createElement('p')
    nameP.innerText = `${data.name}`
    nameP.className = `name`
    document.getElementById(`${data.name}-grid`).appendChild(nameP)

    let idP = document.createElement('p')
    idP.innerText = `#${data.id}`
    idP.className = `idNum`
    document.getElementById(`${data.name}-grid`).appendChild(idP)

    let heightP = document.createElement('p')
    heightP.innerText = `height: ${Math.floor((data.height * 3.937) / 12)}'${Math.ceil((data.height * 3.937) % 12)}"`
    heightP.className = `height`
    document.getElementById(`${data.name}-grid`).appendChild(heightP)

    let weightP = document.createElement('p')
    weightP.innerText = `weight: ${Math.ceil(data.weight / 4.536)} lbs`
    weightP.className = `weight`
    document.getElementById(`${data.name}-grid`).appendChild(weightP)
}