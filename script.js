class Card {
    constructor(){
     this.suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
     //                                       'j' 'q''k' 'a'  
     this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
 } 

 
 }

class Player{
 constructor(player1, player2){
     this.player1Name = player1;
     this.player1Hand = [];
     this.player2Name = player2;
     this.player2Hand = []
 }
}

class Game extends Card{
 constructor(card){
     super(card);
     this.deck = [];
 }
 // build deck.
 buildDeck(){
     //Beginning of ranks loop
     this.suit.forEach((suitValue, rankValue) => {
    

     //looping through the suits array
     this.rank.forEach((rankValue) => {
         if(rankValue === 11){
             rankValue = 'Jack'
         }
         else if(rankValue === 12 ){
             rankValue = 'Queen'
         }
         else if(rankValue === 13){
             rankValue = 'King'
         }
         else if(rankValue === 14){
             rankValue = 'Ace' 
         }
     
                 
     
         let newCard = {
             rank: rankValue,
             suit: suitValue,
         }
         
     this.deck.push(newCard)
     });

//End of ranks loop
    
     return
 });

 } 
 
 
 dealDeck(){
     this.player1Hand = this.deck.slice(0, 26)
     console.log('Player 1');
     console.log(this.player1Hand);
     
     this.player2Hand = this.deck.splice(26,52).reverse(); 
     console.log('Player 2')      
     console.log(this.player2Hand);
     
     
 }
 compareCards(){
     console.log('Who wins?')
     
     for (let i = 0; i < 26; i++){
         console.log('Player 1');
         console.log(this.player1Hand[i]);
         console.log('Player 2')
         console.log(this.player2Hand[i]);
         const winner = this.player1Hand[i] > this.player2Hand[i] ? `Player 1 Wins!` : `Player 2 Wins!`;
         console.log(winner)
         
     }
 }
    
     
 
 // play game.
 playGame(){
     let players = new Player("Player 1", "Player 2");
     console.log("New players created:", players);

     this.buildDeck();

     this.dealDeck();
     
     this.compareCards()

     //This will determine the winner of the game

 }
}



     
 


let warGame = new Game();
warGame.playGame();
