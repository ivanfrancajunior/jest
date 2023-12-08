
type Level = "VE" | "EA" | "ME" | "HA" | "VH" | "EX";

export class Challenge {
  constructor(public id: number, public level: Level) {}

  public points(ChallengeLevel: Level) {
    if (ChallengeLevel === "VE") {
      return 5;
    } else if (ChallengeLevel === "EA") {
      return 10;
    } else if (ChallengeLevel === "ME") {
      return 20;
    } else if (ChallengeLevel === "HA") {
      return 40;
    } else if (ChallengeLevel === "VH") {
      return 80;
    } else {
      return 120;
    }
  }

}
