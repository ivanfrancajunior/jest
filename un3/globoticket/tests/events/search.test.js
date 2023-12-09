const { getEvents } = require("../../js/events/search.js");
const { Event } = require("../../js/events/event.js");
describe("getEvents", () => {
  it("Should return events with ticket price less then 30", () => {
    const searchPredicateMock = jest.fn((e) => e.ticketPrice < 30);

    const expectedEvent = new Event(1, "Pop goes Punk", 20.0, 500, 500);
    const expectedEvent2 = new Event(4, "Nothing new this days", 28.0, 100, 100);
    const expectedEvent3 = new Event(7, "Run Forrest, RUN!", 25.0, 500, 500);

    const events = [
      expectedEvent,
      new Event(2, "Its a test only", 31, 100, 100),
      new Event(3, "Its a test only Again", 32, 100, 100),
      expectedEvent2,
      new Event(5, "Guess what? Other test", 33, 100, 100),
      new Event(6, "If i tell u dont belive me... A TEST... AGAIN", 34, 100, 100),
      expectedEvent3,
    ];
   
    const filteredResult = getEvents(events, searchPredicateMock);

    expect(filteredResult).toEqual([expectedEvent, expectedEvent2, expectedEvent3]);

    expect(searchPredicateMock.mock.calls.length).not.toBe(8)
    expect(searchPredicateMock.mock.calls.length).toBe(7)
    expect(searchPredicateMock.mock.calls[0][0]).toBe(events[0])

    expect(searchPredicateMock).toHaveBeenCalled()
  });
});
