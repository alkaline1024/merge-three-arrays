import { merge } from "../src/merge";

describe("merge", () => {
  it("merges three arrays as specified", () => {
    const c1 = [0, 2, 4];
    const c2 = [5, 3, 1];
    const c3 = [-1, 6, 7];
    expect(merge(c1, c2, c3)).toEqual([-1, 0, 1, 2, 3, 4, 5, 6, 7]);
  });
});
