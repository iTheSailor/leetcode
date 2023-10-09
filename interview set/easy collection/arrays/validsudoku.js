var isValidSudoku = function(board) {
    let y=0;
    while(y<board.length){
        let num=[]
        for(let x =0; x<board[y].length; x++){
            num.push(parseInt(board[y][x]));
        }
        checker(num)
        if(!checker(num)){
            return false
        }
        y++
        
    }
    let x=0;
    while(x<board.length){
        let num=[]
        for(let y=0; y<board.length; y++){
            num.push(parseInt(board[y][x]))
        }
        checker(num)
        if(!checker(num)){
            return false
        }
        x++
        
    }


    function checker(num){
        let i = [];
        for(z=0;z<num.length;z++){
            if(!isNaN(num)){
                i.push(num)
            }
        i.sort((a,b) => a-b)
        if(i.length>1){
            for(let j = 0; j<i.length-1;j++){
                if(i[j] == i[j+1]){
                    return false
                }
            }
            }
        }
        return true
    }

    return true
};


board=[

[".",".",".",".","5",".",".","1","."],
[".","4",".","3",".",".",".",".","."],
[".",".",".",".",".","3",".",".","."],
["8",".",".",".",".",".",".","2","."],
[".",".","2",".","7",".",".",".","1"],
[".","1","5",".",".",".",".",".","."],
[".",".",".",".",".","2",".",".","."],
[".","2",".","9",".",".",".",".","."],
[".",".","4",".",".",".",".","1","1"]]

console.log(isValidSudoku(board))
// console.log(parseInt(board[0][0]))