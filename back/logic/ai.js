// This function doesn't handle walls.
function computeMove(gameState) {
    let pos = gameState.player.position;
    let possibleMoves = [];
    // Check if moving left is possible.
    if (pos > 20) possibleMoves.push(pos-10);
    // Check if moving right is possible.
    if (pos < 90) possibleMoves.push(pos+10);
    // Check if moving down is possible.
    if (pos % 10 !== 1) possibleMoves.push(pos-1);
    // Check if moving up is possible.
    if (pos % 10 !== 9) possibleMoves.push(pos+1);

    // Get a random integer between 0 and possibleMoves.length-1
    let moveIndex = Math.floor(Math.random()*possibleMoves.length);
    return possibleMoves[moveIndex];
}