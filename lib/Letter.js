class Letter {
    constructor(letter) {

        const letterStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        const letterArray = letterStr.split("")

        this.letter = letter;
        
        if (letterArray.includes(this.letter)) {
            this.visible = false;
        } else {
            this.visible = true;
        }
    }

    toString() {
        const letterStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        const letterArray = letterStr.split("")

        if(letterArray.includes(this.letter) && this.visible === false){
            return '_';
        }else{
            return this.letter;
        }
    }

    guess(guessLetter) {
        if(guessLetter === this.letter){
            return true;
        } else{
            return false;
        }
    }

    getSolution() {
        return this.letter
    }
}


module.exports = Letter; 
