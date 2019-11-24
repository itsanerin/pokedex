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


// Get the modal
var modal = document.getElementById("myModal")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// When the user clicks on the button, open the modal
showModal = () => {
  modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
closeModalX = () => {
  modal.style.display = "none"
  document.getElementById('stat-grid').remove();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
    document.getElementById('stat-grid').remove();
  }
}