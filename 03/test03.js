
/**
 * return chess array
 * 
 * @returns array[char]
 */
export function chessboard(){
   let arraChessBoard = [] ;
   for (let i = 1; i <= 10; i++) {
      // console.log(i%2!=0?" # # # #":"# # # #");
      i%2 != 0 ? arraChessBoard.push(" # # # #") : arraChessBoard.push(" # # # #");
   }
   return arraChessBoard;
}