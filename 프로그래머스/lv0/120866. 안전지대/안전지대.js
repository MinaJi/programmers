function solution(board) {
  var answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        // 위
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        // 아래
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        // 왼쪽
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        // 오른쪽
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        // 위 왼쪽 대각선
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        // 위 오른쪽 대각선
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        // 아래 왼쪽 대각선
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
        // 아래 오른쪽 대각선
        if (
          i !== board.length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] !== 1
        ) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }

  board.map((item) => item.map((item) => (item === 0 ? answer++ : null)));

  return answer;
}