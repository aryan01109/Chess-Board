const board = document.getElementById("board");
// const pieces = {
//   0: ["♜","♞","♝","♛","♚","♝","♞","♜"],
//   1: ["♟","♟","♟","♟","♟","♟","♟","♟"],
//   6: ["♙","♙","♙","♙","♙","♙","♙","♙"],
//   7: ["♖","♘","♗","♕","♔","♗","♘","♖"]
// };

   const pieces = {
      0:["♜","♞","♝","♛","♚","♝","♞","♜"],
      1:["♟","♟","♟","♟","♟","♟","♟","♟"],
      2:[null,null,null,null,null,null,null,null],
      3:[null,null,null,null,null,null,null,null],
      4:[null,null,null,null,null,null,null,null],
      5:[null,null,null,null,null,null,null,null],
      6:["♙","♙","♙","♙","♙","♙","♙","♙"],
      7:["♖","♘","♗","♕","♔","♗","♘","♖"]
   };

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");
     if((row + col)%2 ===0){
            square.classList.add("white");
        }else{
            square.classList.add("black");
        }

    // Add chess items
    if (pieces[row] && pieces[row][col]) {
      square.textContent = pieces[row][col];
     
     // for white side
      if (row === 0 || row === 1) {
    square.style.color = "white";
    }
}  
    board.appendChild(square);
  }
}
