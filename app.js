const container = document.querySelector('.container');

function addSquare() {
  const square = document.createElement('div');
  container.appendChild(square);
}

document.querySelector('.add-square-btn').addEventListener('click', addSquare);
