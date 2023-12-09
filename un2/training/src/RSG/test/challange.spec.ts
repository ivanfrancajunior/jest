import { Challenge } from "../Challange";

describe("Challenge class", () => {
  it("should return 5 as point value ", () => {
    const challenge1 = new Challenge(1, "VE");
    expect(challenge1.points("VE")).toEqual(5);
    console.log(challenge1.points("VE"));
    
  });
  it("should return 10 as point value", () => {
    const challenge2 = new Challenge(1, "EA");
    expect(challenge2.points("EA")).toEqual(10);
    console.log(challenge2.points("EA"));
  });
  it("should return 20 as point value", () => {
    const challenge3 = new Challenge(1, "ME");
    expect(challenge3.points("ME")).toEqual(20);
    console.log(challenge3.points("ME"));
  });
  it("should return 40 as point value", () => {
    const challenge4 = new Challenge(1, "HA");
    expect(challenge4.points("HA")).toEqual(40);
    console.log(challenge4.points("HA"));
  });
  it("should return 80 as point value", () => {
    const challenge5 = new Challenge(1, "VH");
    expect(challenge5.points("VH")).toEqual(80);
    console.log(challenge5.points("VH"));
  });
  it("should return 120 as point value", () => {
    const challenge6 = new Challenge(1, "EX");
    expect(challenge6.points("EX")).toEqual(120);

    console.log(challenge6.points("EX"));
  });
});
