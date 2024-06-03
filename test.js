class Card {
       constructor(){
        this.suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        //                                       'j' 'q''k' 'a'  
        this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];//use switch for the faces
    } 
   
    
    }

class Player{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
}

class Game extends Card{
    constructor(card){
        super(card);
        this.deck = [];
    }
    // build deck.
    buildDeck(){
        console.log('build deck');
        this.rank.forEach((card) => console.log(card));
        this.suit.forEach((card) => console.log(card));
        switch(this.rank){
            case 11:
                return 'Jack'
            case 12:
                return 'Queen'
            case 13:
                return 'King'
            case 14:
                return 'Ace'            }
        // run through the whole deck to generate cards
        console.log(`${this.rank[Math.floor(Math.random() * this.rank.length)]} of ${this.suit[Math.floor(Math.random() * this.suit.length)]}`);
    } 
    // deal deck.

    // play game.
    playGame(){
        this.player1.buildDeck();
        this.player2.buildDeck();
        if(this.player1.buildDeck() > this.player2.buildDeck()){
            return `Player 1 wins!`
        }
        else if(this.player1.buildDeck() < this.player2.buildDeck()){
            return `Player 2 wins!`
        }
   
    }
}
let warGame = new Game();
warGame.playGame();
