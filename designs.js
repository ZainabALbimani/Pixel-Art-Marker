/// variables - element,height, and width
const table = document.getElementById('pixelCanvas');
let gridHeight = $("#inputHeight");
let gridWidth = $("#inputWidth");

$('#submitQuery').click(function(submit) {
  submit.preventDefault();
  makeGrid();
});

let color = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
    table.innerHTML = '';
    let height = gridHeight.val();
    let width = gridWidth.val();

    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    for (let x = 0; x < height; x++) {
        let row = table.insertRow(x);
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
