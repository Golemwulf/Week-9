const card = {
    rank: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    suit: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],   
}

let  = 'Player 1';
let player2 = 'Player 2';

const drawCard1 = () =>{
    return card.rank[Math.floor(Math.random() * card.rank.length)];

    // return `${card.rank[Math.floor(Math.random() * card.rank.length)]} of ${card.suit[Math.floor(Math.random() * card.suit.length)]}`
}

const drawCard2 = () =>{

    return card.rank[Math.floor(Math.random() * card.rank.length)];
    // return `${card.rank[Math.floor(Math.random() * card.rank.length)]} of ${card.suit[Math.floor(Math.random() * card.suit.length)]}`
}
// console.log(drawCard())

const winner = () =>{
    console.log(`Player 1: ${drawCard1()}`);
    console.log(`Player 2: ${drawCard2()}`)
    if (drawCard1() > drawCard2()){
        return 'Player 1 wins!'
    }else if (drawCard1() < drawCard2()){
        return 'Player 2 wins!';
    }else {
        return 'Draw';
    } 
} 
console.log(winner())