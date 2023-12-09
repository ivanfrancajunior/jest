const promotions = require("../../js/promotions/promotions");
const {spyOn} = require('jest')

describe("generateReferralCode", () => {
  it("Should test if referal code contains a userID", () => {
    const userID = "1234";

    const referalCode = promotions.generateReferralCode(userID);

    expect(referalCode).toContain(userID);
    expect(referalCode).toMatch(userID);
  });

  it("should test if the referal code has a correct format", () => {
    const userID = "1234";

    const referalCode = promotions.generateReferralCode(userID);

    expect(referalCode).toMatch(/#FRIEND-#\d+-#1234/);
  });
  it("should return correct referal code", () => {
    const randomMock = jest.spyOn(global.Math, "random").mockReturnValue(78945);

    const referalCode = promotions.generateReferralCode(123);

    // expect(referalCode).toBe("#FRIEND-#78945-#123");

    expect(randomMock).toHaveBeenCalled()
  });
});
