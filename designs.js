// variables - element,height, and width
const table = document.getElementById('pixelCanvas');
let heightt = $("#inputHeight");
let widthh = $("#inputWidth");

$('#inputSubmit').click(function(Submit) {
  Submit.preventDefault();
  makeGrid();
});

let color = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
    table.innerHTML = '';
    let height = heightt.value();
    let width = widthh.value();

    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.value();
        });
    }

    for (let x = 0; x < height; x++) {
        let row = table.insertRow(i);
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
