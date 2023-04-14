function solution(keyinput, board) {
    var answer = [0, 0];
    const boardSize = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    keyinput.forEach((move) => {
        switch (move) {
            case "up":
                if (answer[1] !== boardSize[1]) answer[1]++;
                break;
            case "down":
                if (answer[1] !== -boardSize[1]) answer[1]--;
                break;
            case "left":
                if (answer[0] !== -boardSize[0]) answer[0]--;
                break;
            case "right":
                if (answer[0] !== boardSize[0]) answer[0]++;
                break;
        }
    });
    
    return answer;
}