/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// var makeEmptyMatrix = function(n) {
//   return _(_.range(n)).map(function() {
//     return _(_.range(n)).map(function() {
//       return 0;
//     });
//   });
// };


//make empty board n size
//var rook = 1 [0,0,0] = [1,0,0]
//place rook 

/*
var rook = 1
[0,0,0]<
[0,0,0]
[0,0,0]

var function itt(board,nr,nc){
  nr = 0 nc = 0 which looks at 1st array
   if (nr)
   arr[nr][nc] = rook >>[1,0,0]
    arr[nr][nc]

 
    nr++
    nc++


}


*/


window.findNRooksSolution = function(n) {

  var board = new Board({n: n});
  var solution = undefined; //fixme
  //var makeBoard = new Board({n: n});
  var row = 0;
  var col = 0;
  
  var search = function(grid) {
  //   //debugger;
  //     grid.togglePiece(row, col);//00
  //     row++;//1
  // debugger;
  //       grid.togglePiece(row, col);
  //       console.log('befire');
  //       if (grid.hasColConflictAt(col)) {
  //         console.log('2');
  //         console.log('check');
  //         grid.togglePiece(row, col);//remove
  //         col++;
  //         grid.togglePiece(row, col);//set again
          
  //     }
  //   }
  //   search(grid);
   // if col = n && col+1 === undefine
   //    console.log('passed');
  // if first time()
  //    toggle (0,0)
  // increase row by 1 
  // increase col by 1 
  // if no collisoin
    // toggle pos =(1,1); 
  // recall it self  
   
    if (col === n && col + 1 === undefined) {
      console.log('passed');
    }
    grid.togglePiece(row, col);
    //console.log('check');
    row++;
    col++;
    if (!grid.hasColConflictAt(col) && grid.hasColConflictAt(col + 1) !== undefined) {
     debugger;
     console.log(`col + 1 ${col+1} `);
     console.log(`this is row${row}, this is col ${col}, this n ${n}`);
//debugger;
      grid.togglePiece(row, col);
      console.log('why is it breaking');
    }
     
   
  
  };
  
  
  //console.log(board);
  search(board);
  
  // console.log(makeBoard);
  // makeBoard.togglePiece(1, 2);
  // console.log(makeBoard);
  // makeBoard.togglePiece(1, 2);
  // console.log(makeBoard,'toogle off');

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



//console.log(findNRooksSolution(3));


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
