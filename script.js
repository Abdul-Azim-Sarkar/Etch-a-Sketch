let color = "Black"

function populateBoard(size) {
  let sketchpad = document.querySelector(".sketchpad")
  let squares = sketchpad.querySelectorAll("div")
  squares.forEach((div) => div.remove())
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`
  let amount = size * size
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div")
    square.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = color)
    )
    square.style.backgroundColor = "White"
    sketchpad.insertAdjacentElement("beforeend", square)
  }
}
populateBoard(64)

function changeSize(input) {
  if (input >= 2 && input <= 200) {
    populateBoard(input)
  } else {
    alert("Too many squares")
  }
}
function changeColor(choice) {
  color = choice
}
function resetBoard() {
  let sketchpad = document.querySelector(".sketchpad")
  let squares = sketchpad.querySelectorAll("div")

  squares.forEach((div) => (div.style.backgroundColor = "white"))
}
