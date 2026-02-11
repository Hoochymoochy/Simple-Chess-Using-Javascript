function chess960() {
    Pawn = 'pawn';
    Rook = 'rook';
    Knight = 'knight';
    Bishop = 'bishop';
    Queen = 'queen';
    King = 'king';
    
    const startPieces = [ 
        null, null, null, null, null, null, null, null,
        Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
        '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', 
        Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
        null, null, null, null, null, null, null, null
    ];

    const randomChoice = (arr) =>
        arr[Math.floor(Math.random() * arr.length)];

    const emptyIndices = () =>
        startPieces
            .map((piece, index) =>
                index < 8 && piece === null ? index : null
            )
            .filter(i => i !== null);

    const darkSquares = [0, 2, 4, 6];
    const lightSquares = [1, 3, 5, 7];

    startPieces[randomChoice(darkSquares)] = Bishop;
    startPieces[randomChoice(lightSquares)] = Bishop;

    startPieces[randomChoice(emptyIndices())] = Queen;

    startPieces[randomChoice(emptyIndices())] = Knight;
    startPieces[randomChoice(emptyIndices())] = Knight;

    const remaining = emptyIndices().sort((a, b) => a - b);

    startPieces[remaining[0]] = Rook;
    startPieces[remaining[1]] = King;
    startPieces[remaining[2]] = Rook;

    for (let i = 0; i < 8; i++) {
        startPieces[56 + i] = startPieces[i];
    }

    return startPieces;
}

module.exports = chess960;
