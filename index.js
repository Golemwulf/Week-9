// Define a Card class
class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
  
    // Define a method to get the numerical rank of the card
    getValue() {
      if (this.rank === 'J') return 11;
      if (this.rank === 'Q') return 12;
      if (this.rank === 'K') return 13;
      if (this.rank === 'A') return 14;
      return parseInt(this.rank);
    }
  }
  
  // Define a Deck class
  class Deck {
    constructor() {
      this.cards = [];
      this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      // Populate the deck with cards
      for (let suit of this.suits) {
        for (let rank of this.ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
    }
  
    // Shuffled deck using the Fisher Yates method
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    // Method to deal cards between players
    deal() {
      const player1 = [];
      const player2 = [];
      for (let i = 0; i < this.cards.length; i++) {
        if (i % 2 === 0) {
          player1.push(this.cards[i]);
        } else {
          player2.push(this.cards[i]);
        }
      }
      return [player1, player2];
    }
  }
  
  // Define a Game class
  class Game {
    constructor() {
      this.deck = new Deck();
      this.deck.shuffle();
      [this.player1, this.player2] = this.deck.deal();
    }
  
    // Method to compare each card's rank
    compareCards() {
      for (let i = 0; i < this.player1.length; i++) {
        const card1Value = this.player1[i].getValue();
        const card2Value = this.player2[i].getValue();
  
        if (card1Value > card2Value) {
          console.log("Player 1 wins this round with", this.player1[i].rank, "of", this.player1[i].suit);
        } else if (card1Value < card2Value) {
          console.log("Player 2 wins this round with", this.player2[i].rank, "of", this.player2[i].suit);
        } else {
          console.log("It's a tie!");
        }
      }
    }
  }
  
  // Create a new game and start playing
  const game = new Game();
  game.compareCards();
  