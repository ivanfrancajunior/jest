import { User } from "../User";
import { Challenge } from "../Challange";

describe("User class", () => {
  it("should show 0 as total of points ", () => {
    const senhore = new User("Dona Maria");
    
    const initialPointsValue = senhore.points

    console.log(initialPointsValue);
    
    expect(initialPointsValue).toEqual(0)

  });
  it("Should add a new a challenge", () => {
    const senhore = new User("Dona Maria");

    const challenge1 = new Challenge(1, "VE");

    senhore.newSolvedChallenge(challenge1); 
    
    const log = senhore.logs

    expect(log).not.toBeNull()

  });
  it("Should show all challenges completed", () => {
    const senhore = new User("Dona Maria");

    const challenge1 = new Challenge(1, "VE");
    const challenge2 = new Challenge(6, "EX");

    senhore.newSolvedChallenge(challenge1); 
    senhore.newSolvedChallenge(challenge2); 
    
    const logs = senhore.logs
    console.log(logs);
    console.log(logs.length);
    
    expect(logs).toHaveLength(2)
    expect(logs).toEqual(['CHALL ID 1', 'CHALL ID 6'])

  });

  it('Should return a 125 as total of points',() =>{
    const senhore = new User("Dona Maria");

    const challenge1 = new Challenge(1, "VE");
    const challenge2 = new Challenge(6, "EX");

    senhore.newSolvedChallenge(challenge1); 
    senhore.newSolvedChallenge(challenge2); 
    
    const total = senhore.points
    console.log(total);
    

    expect(total).toEqual(125)
  })
});
