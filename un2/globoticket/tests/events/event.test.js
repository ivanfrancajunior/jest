const { Event, getTagLine, createEvent } = require("../../js/events/event");

const {
  InvalidEventNameError,
  InvalidEventPriceError,
} = require("../../js/error-handling/exceptions");

it("should returns 'Sold Out!' when no tickets left", () => {
  const event = new Event(1, "Dummer BBQ", 40.0, 100, 0);

  const tagline = getTagLine(event, 10, 0);

  expect(tagline).toBe("Event Sold Out!");
});

describe("createEvent", () => {
  it("should throw a error when name is not a string", () => {
    expect(() => createEvent(1, 44, 40.0)).toThrow(
      new InvalidEventNameError("Event name cannot exceed 200 characters")
    );
  });

  it("should throw a error if the event name have more than 200 charactheres", () => {
    const name = Array(201).fill("a").join("");

    expect(() => createEvent(name, 77, 200)).toThrow(
      new InvalidEventNameError("Event name cannot exceed 200 characters")
    );
  });

  it("should throw a error if the event price is lower than 0", () => {
    expect(() => createEvent("A type of Event", -1, 200)).toThrow(
      "Event price must be more or equal to 0"
    );
  });

  it("should throw a error if the available tickets value is lower than 0", () => {
    expect(() => createEvent("A type of Event", 10, -1)).toThrow(
      "Event tickets must be more than 0"
    );
  });
});
