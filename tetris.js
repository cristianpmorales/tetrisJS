const cvs = document.getElementById('tetris')
const ctx = cvs.getContext("2d")

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squaresize = 20;
const VACANT = "WHITE"; //Color of empty square

// Funtion to draw a square

function drawSquare(x,y,color){
  //Filler color
  ctx.fillStyle = color
  ctx.fillRect(x*SQ,y*SQ,SQ,SQ)
  //Border outline
  ctx.strokeStyle = "BLACK";
  ctx.strokeRect(x*SQ,y*SQ,SQ,SQ)
}

//create the board

let board = []
for ( r=0; r<ROW; r++){
  board[r]= []
  for (c= 0; c < COL; c++){
    board[r][c] = VACANT
  }
}

// draw the board
function drawBoard(){
  for ( r=0; r<ROW; r++){
    for (c= 0; c < COL; c++){
      drawSquare(c,r,board[r][c])
    }
  }
}

drawBoard()

//draw piece and color
const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

//initate a piece

let p = new Piece ( PIECES[0][0], PIECES[0][1])

// The Object Piece
function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color

    this.tetromminoN = 0 // Starts from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN]

    // Control each of the pieces
    this.x = 0;
    this.y = 0;
}

// draw a piece to the board
//rewritting code
new function(){}
Piece.prototype.draw = function(){
    for ( r=0; r < this.activeTetromino.length; r++){
      for (c= 0; c < this.activeTetromino.length; c++){
        // Draw only the occupied squares
        if (this.activeTetromino[r][c]){
          drawSquare(this.x + c, this.y + r, this.color)
        }
      }
    }
}
p.draw()
