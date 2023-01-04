let gridSize = 16;

// Resize grid button
const dimensionBtn = document.createElement('button');
dimensionBtn.textContent = "Resize Grid";
dimensionBtn.classList.add('button');

dimensionBtn.addEventListener('click', () =>{
    do{
        gridSize = parseInt(prompt('Enter new grids dimension: ', ''));
    }while(!Number.isInteger(gridSize));

    // Update grid size css variable
    document.body.style.setProperty('--grid-size',`calc(100% / ${gridSize})`);
    destroyGrid();
    createGrid(gridSize);
});

document.body.appendChild(dimensionBtn);

// Reset canvas button
const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset Canvas";
resetBtn.classList.add('button');

resetBtn.addEventListener('click', () => {
    destroyGrid();
    createGrid();
});

document.body.appendChild(resetBtn);

// Red outer border
const redBorder = document.createElement('div');
redBorder.id = 'border';


// Create grid
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

destroyGrid();
createGrid();

redBorder.appendChild(gridContainer);

// Knobs
const knobsDiv = document.createElement('div');
knobsDiv.id = 'knob-container';
const leftKnob = document.createElement('div');
const rightKnob = document.createElement('div');
leftKnob.id = 'knobs';
rightKnob.id = 'knobs';
leftKnob.classList.add('left');
rightKnob.classList.add('right');

knobsDiv.appendChild(leftKnob);
knobsDiv.appendChild(rightKnob);
redBorder.appendChild(knobsDiv);

document.body.appendChild(redBorder);

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
    
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-square');
    
            // Draw square when moused over
            newDiv.addEventListener('mouseover', () => {
                if(newDiv.classList.contains('drawn-square')) return;
                newDiv.classList.add('drawn-square');
            });
    
            gridContainer.appendChild(newDiv);
        }
    }
}

function destroyGrid(){
    gridContainer.textContent = '';
}