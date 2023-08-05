const x = document.querySelector('h1');
x.textContent = "etch a sketch";
x.style.color = "blue";

const gridContainer = document.getElementById('container')
// Function to create the grid
function createGrid(rows, cols) {
  // Clear the container before creating the grid
  gridContainer.innerHTML = '';

  // Set the CSS styles for the grid container
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // Create the individual cells and add them to the grid container
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.textContent = i + 1;
    gridContainer.appendChild(cell);
  }
}

// Call the createGrid function with the number of rows and columns you want
createGrid(16,16); // Change these values as needed
