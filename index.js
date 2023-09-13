//Hello World
//Reset Button
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("reset").addEventListener("click", function () {
        resetBoard();
    });
    const pieceImages = document.querySelectorAll('.piece');
    pieceImages.forEach(img => {
        img.addEventListener('click', function (event) {
            selected(event);
        });
    });
    function resetBoard() { //default chess piece positions
        const pieceImages = document.querySelectorAll(".piece");
        pieceImages.forEach(img => {
            img.src = '';
        });
    }
    //Piece Movement
    let selectedPiece = null;
    function selected(event) {
        event.preventDefault();
        // Check if a piece is already selected
        console.log("Piece Selected");
        if (selectedPiece) {
            // Move the selected piece to the clicked square
            const clickedSquare = this.parentElement.parentElement;
            clickedSquare.innerHTML = ''; // Clear the clicked square
            clickedSquare.appendChild(selectedPiece); // Move the piece
            // Clear the selection
            selectedPiece = null;
        } else {
            // Select the clicked piece
            selectedPiece = this;
        }
    }
});





