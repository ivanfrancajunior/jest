import { Challenge } from "./Challange";
export class User {
  constructor(
    public name: string,
    public exp: number = 0,
    private _log: string[] = []
  ) {}

  get points() {
    return this.exp;
  }

  get player() {
    return this.name;
  }

  get logs() {
    return this._log;
  }

  private addPoints(points: number) {
    this.exp += points;
  }
  private addLog(challange: string) {
    this._log.push(challange);
  }

  public newSolvedChallenge(challange: Challenge) {
    
    const challengePontuation = challange.points(challange.level);

    const challengeIdentification = "CHALL ID " + challange.id;

    this.addLog(challengeIdentification);

    this.addPoints(challengePontuation);
  }
}
