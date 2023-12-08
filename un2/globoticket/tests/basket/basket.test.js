const basket = require("../../js/basket/basket");
const { Event } = require("../../js/events/event");
const { BasketItem } = require("../../js/basket/basketitem");
const { User } = require("../../js/users/users");
let events = [];
let items = [];

describe("CalculateTotal function", () => {
  beforeEach(() => {
    events = [
        new Event(1, "A Night At The Proms", 2500.00, 2500, 2500),
        new Event(2, "Taylor Swift", 50.00, 5500, 2500),
        new Event(3, "Rage Against The Machine", 35.00, 2500, 2500),
    ];

    items = [
        new BasketItem(events[0], 1),
        new BasketItem(events[1], 4),
        new BasketItem(events[2], 2),
    ];
  });

  test("Test calculates total basket price when no discount applied", () => {
    const total = basket.calculateTotal(items);

    expect(total).toBeCloseTo(2770.0, 2);
  });

  test("Test calculates total basket price with discount", () => {
    const total = basket.calculateTotal(items, 800);

    expect(total).toBeCloseTo(1970.0, 2);
  });
});

describe("ShowAlerts function", () => {
  it("should does not  adverts for premium users", () => {
    let user = new User(1, "Test User");
    user.isPremium = true;

    expect(basket.showAdverts(user)).toBe(false);
  });
  it("should show adverts for non-premium users", () => {
    let user = new User(1, "Test User");
    user.isPremium = false;

    expect(basket.showAdverts(user)).toBe(true);
  });
});

describe("serializeBasketItemsToJson", () => {
  it("should verify if basket items are serialized correctly", () => {
    const events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(3, "Raging Machine", 35.0, 2500, 2500),
    ];

    const items = [new BasketItem(events[0], 1), new BasketItem(events[1], 2)];
    itemsSerializedToJson = [
      {
        event: {
          id: 1,
          name: "A Night At The Proms",
          ticketPrice: 2500.0,
          totalTickets: 2500,
          ticketsRemaining: 2500,
        },
        ticketCount: 1,
      },
      {
        event: {
          id: 3,
          name: "Raging Machine",
          ticketPrice: 35.0,
          totalTickets: 2500,
          ticketsRemaining: 2500,
        },
        ticketCount: 2,
      },
    ];

    const serializedItems = basket.serializeBasketItemsToJson(items);

    expect(serializedItems).toEqual(itemsSerializedToJson);
  });
});

describe("getBasketItem", () => {
  beforeEach(() => {
    events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(2, "Taylor Swift", 50.0, 5500, 2500),
      new Event(3, "Rage Against The Machine", 35.0, 2500, 2500),
    ];

    items = [
      new BasketItem(events[0], 1),
      new BasketItem(events[1], 4),
      new BasketItem(events[2], 2),
    ];
  });

  it("should returns thrutly if event exists in the basket", () => {
    const basketItem = basket.getBasketItem(items, events[0]);

    expect(basketItem).not.toFalsy();
    
    expect(basketItem).toBeTruthy();
  });

  it("should returns falsy if event does not exist in the basket", () => {
    const basketItem = basket.getBasketItem(
      items,
      new Event(12, "Some random event", 1.0, 100, 100)
    );

    expect(basketItem).toBeNull();
  });
});

// verificação tipos primitivos toBe
// verificação de igualdades ToEqual | tostrictEqual
// toContain
//toMatch
