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
