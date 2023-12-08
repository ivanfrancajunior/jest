import { Shiritori } from "./Shiritori";
describe("ShiritoriGame Class", () => {
  it("Should start a game", () => {
    const newGame = new Shiritori();

    console.log(newGame);

    let initialStats = { _game_over: false, _words: [] };

    expect(newGame).toEqual(initialStats);
  });
  it("Should return a empty words list ", () => {
    const newGame = new Shiritori();

    const word = newGame.words;

    expect(word.length).toBe(0);
  });
  it("Should return a corresponding word in lowercase ", () => {
    const newGame = new Shiritori();

    newGame.play("BALA");

    console.log(newGame.words[0]);

    expect(newGame.words[0]).toBe("bala");
  });
  it("Shouldn't add an invalid word and close the game", () => {
    const newGame = new Shiritori();

    newGame.play("BALA");
    newGame.play("COLEIRA");
    console.log(newGame.words);

    expect(newGame.words.length).toBe(1);

    expect(newGame.status).toBe(true);
  });

  it(" Should return 2 as total words added", () => {
    const newGame = new Shiritori();

    newGame.play("BALA");
    newGame.play("amarelo");

    console.log(newGame.words);
    

    expect(newGame.words.length).toBe(2);
  });
  it("Should restart a game with initial states", () => {
    const newGame = new Shiritori();

    newGame.play("BALA");
    newGame.play("amarelo");

    expect(newGame.words.length).toBe(2);

    newGame.restart();

    let initialStats = { _game_over: false, _words: [] };

    expect(newGame).toEqual(initialStats);
  });
});
