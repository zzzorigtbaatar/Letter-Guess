const Letter = require("./Letter");
const words = require("./words.js")

class Word {
  constructor(inputWord){
    
    this.word = inputWord
    this.wordArray = this.word.split("")

    this.letterObjectArray = []
    
    for(let i=0; i < this.wordArray.length; i++){
        this.letterObjectArray[i] = new Letter(this.wordArray[i])//word input
    }
  }
}

module.exports = Word;
