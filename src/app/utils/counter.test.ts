import { decrementCounter, incrementCounter } from "./counter";

describe(incrementCounter, () => {
  it("should increment by 1", () => {
    expect(incrementCounter(2)).toEqual(3);
  });
});

describe(decrementCounter, () => {
  it("should decrement by 1", () => {
    expect(decrementCounter(20)).toEqual(19);
  });
});
