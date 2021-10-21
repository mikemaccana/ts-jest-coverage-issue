import { doubleNumber } from "./index";

describe("doubleNumber", () => {
  it("works", () => {
    expect(doubleNumber(2, false)).toEqual(4);
  });
});
