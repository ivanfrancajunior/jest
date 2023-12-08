import { User } from "./User";
import { Challenge } from "./Challange";

const challenge1 = new Challenge(1, "VE");
const challenge2 = new Challenge(1, "EA");
const challenge3 = new Challenge(1, "ME");
const challenge4 = new Challenge(1, "HA");
const challenge5 = new Challenge(1, "VH");
const challenge6 = new Challenge(1, "EX");

const user1 = new User("Senhora");

user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);

const user2 = new User("Steve");

user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);

console.log(user1.points)
console.log(user1.logs)

console.log(user2.points)
console.log(user2.logs)