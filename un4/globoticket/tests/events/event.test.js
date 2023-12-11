const { Event, getTagLine } = require('../../js/events/event');

it("should returns 'Sold Out!' when no tickets left", () => {
  const event = new Event(1, "Dummer BBQ", 40.0, 100, 0);

  const tagline = getTagLine(event, 10, 0);

  expect(tagline).toBe("Event Sold Out!");
});
