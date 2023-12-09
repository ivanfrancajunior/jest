export class Shiritori {

    constructor(private _words: string[] = [],private _game_over:boolean = false ){}

    get words(){
        return this._words;
    }

    get status(){
        return this._game_over
    }

    set status(value:boolean){
        this._game_over = value
    }

    private addNewWord(word:string){
        this._words.push(word.toLowerCase())
    }

    public play(word: string){
        const lastWord = this._words[this._words.length -1]

        if(!lastWord){
            this.addNewWord(word)
        }

        if(lastWord){
            const firstLetter = word[0]
            const lastLetter = lastWord[lastWord.length -1]

            if(firstLetter === lastLetter){
                this.addNewWord(word)
            } else{
                this.status = true
               return 'invalid!'
            }
        }

    }
    public restart(){

        this._words = [];
        this._game_over = false
        return 'jogo reiniciado'
    }
}