var isValidSudoku = function(board) {
    var x,y,n;
    for(y=0;y<board.length;y++){
        x=0;
        while(x<board[y].length-1){
            for(n=x+1;n<board[y].length;n++){
                if(board[y][x] !== '.' && board[y][x] === board[y][n]){
                    return false
                }
            }
            console.log('row' + y + 'clear')
            x++
        }
        x=0;
        for
    }
};

board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
