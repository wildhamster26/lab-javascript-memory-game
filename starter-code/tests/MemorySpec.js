/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('MemoryGame constructor', function () {
  beforeEach(function () {
    memoryGame = new MemoryGame([]);
  });

  it('Create MemoryGame object', function () {
    expect(typeof MemoryGame).toBe('function');
  });

  it('MemoryGame should receive `cards` as a parameter and create it own `cards` property', function () {
    expect(memoryGame.cards).toBeDefined();
  });

  it('MemoryGame should have a pickedCards property', function () {
    expect(memoryGame.pickedCards).toBeDefined();
  });

  it('pickedCards property should be an array', function () {
    expect(Array.isArray(memoryGame.pickedCards)).toBe(true);
  });

  it('MemoryGame should have a pairsClicked property', function () {
    expect(memoryGame.pairsClicked).toBeDefined();
  });

  it('pairsClicked property should be a number', function () {
    expect(typeof memoryGame.pairsClicked).toBe('number');
  });

  it('MemoryGame should have a pairsGuessed property', function () {
    expect(memoryGame.pairsGuessed).toBeDefined();
  });

  it('pairsGuessed property should be a number', function () {
    expect(typeof memoryGame.pairsGuessed).toBe('number');
  });
});

describe('shuffleCards method', function () {
  beforeEach(function () {
    memoryGame = new MemoryGame([
      'aquaman.jpg',
      'batman.jpg',
      'captain-america.jpg',
      'fantastic-four.jpg',
      'flash.jpg',
      'green-arrow.jpg',
      'green-lantern.jpg',
      'ironman.jpg',
      'spiderman.jpg',
      'superman.jpg',
      'the-avengers.jpg',
      'thor.jpg'
    ]);
  });

  it('Should be declare', function () {
    expect(typeof memoryGame.shuffleCards).toBe('function');
  });

  it('Should return undefined', function () {
    expect(typeof memoryGame.shuffleCards()).toBe('undefined');
  });

  it('Should mixed the cards property', function () {
    var formerCardsString = memoryGame.cards.map(function(card) { return card.img }).toString();
    memoryGame.shuffleCards();
    var newCardsString = memoryGame.cards.map(function(card) { return card.img }).toString();
    expect(formerCardsString === newCardsString).toBe(false);
  });
});

describe('checkIfPair method', function () {
  it('Should be declare', function () {
    expect(typeof memoryGame.checkIfPair).toBe('function');
  });

  it('It should add 1 to `pairsClicked` when we call it', function () {
    memoryGame.checkIfPair('batman.jpg', 'ironman.jpg');
    expect(memoryGame.pairsClicked).toBe(1);
  });

  it('It should return true when the comparing cards are the same', function () {
    expect(memoryGame.checkIfPair('ironman.jpg','ironman.jpg')).toBe(true);
  });

  it('It should return false when the comparing cards are the same', function () {
    expect(memoryGame.checkIfPair('ironman.jpg','flash.jpg')).toBe(false);
  });

  it('It should add 1 to pairsGuessed if they are the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair('ironman.jpg','ironman.jpg')
    expect(memoryGame.pairsGuessed).toBe(1);
  });

  it('It should not add anything to pairsGuessed if the not the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair('ironman.jpg','green-lantern.jpg')
    expect(memoryGame.pairsGuessed).toBe(0);
  });
});

describe('isFinished method', function () {
  it('Should be declare', function () {
    expect(typeof memoryGame.isFinished).toBe('function');
  });

  it('It should return false at the beggining of the game', function () {
    expect(memoryGame.isFinished()).toBe(false);
  });

  it('It should return false if there still some pairs to be guessed', function () {
    memoryGame.pairsGuessed = 4;
    expect(memoryGame.isFinished()).toBe(false);
  });

  it('It should return true if all pairs were guessed', function () {
    memoryGame.pairsGuessed = 12;
    expect(memoryGame.isFinished()).toBe(true);
  });

});