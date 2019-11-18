// var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param.val();

//   $.ajax({
//     type: "GET",
//     url: pokeURL,
//     success: function(data){ 
//       ajaxSuccess(data);
//       haveResult = true;
//     }
//   });

// function ajaxSuccess(data){
//   var id = data.id;  
//   var name = data.name;
//   var ability = data.abilities;
//   var type = data.types;
// }

//   textId.html(id);
//   textName.html(name);
//   textAbility.html(ability[0].ability.name); 
//   textType.html(type[0].type.name);



// trainer = document.getElementById("trainer");

// class PokeInfo{
//     constructor(name) {
//     this.name = name
//     this.sprite = sprite
//     this.type = []
//     this.moveList = []
//     this.level = level
//     this.hp = hp
//     this.atk = attack
//     this.def = defense
//     this.spAtk = specAttack
//     this.spDef = specDef
//     this.speed = speed
//     }
// }

//when you click on one particular pokemon, set pokemon class to display:none and remove pokemon class from clicked element

pokemon = document.getElementsByClassName("pokemon");
// pokeArr = [kyogre, garchomp, gyarados, vaporeon, feralgatr, blastoise];



function addClass(selector, myClass) {
  elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add(myClass);
  }
}

function removeClass(selector, myClass) {
  elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove(myClass);
  }
}


class PokeHighlight {
    constructor(name) {
        this.name = name
        this.element = document.getElementById(`${name}`)
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