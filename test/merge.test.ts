import { merge } from "../src/merge";

describe("merge", () => {
  it("merges three arrays as specified", () => {
    const c1: number[] = [0, 2, 4];
    const c2: number[] = [5, 3, 1];
    const c3: number[] = [-1, 6, 7];
    expect(merge(c1, c2, c3)).toEqual([-1, 0, 1, 2, 3, 4, 5, 6, 7]);
  });
  
  it("handles arrays of different lengths", () => {
    const c1: number[] = [];
    const c2: number[] = [20, 13, 5, 4, 3, 2];
    const c3: number[] = [6, 7, 8, 9, 10, 11, 14];
    expect(merge(c1, c2, c3)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 20]);
  });

  it("handles arrays with only zeros", () => {
    const c1: number[] = [0, 0];
    const c2: number[] = [0, 0];
    const c3: number[] = [0, 0];
    expect(merge(c1, c2, c3)).toEqual([0, 0, 0, 0, 0, 0]);
  });
 
  it("handles arrays with mixed numbers", () => {
    const c1: number[] = [-10, -10, 0, 0, 0, 0, 0, 0, 10, 10];
    const c2: number[] = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    const c3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(merge(c1, c2, c3)).toEqual([-10, -10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]);
  });

  it("handles large arrays (100k member)", () => {
    const c1: number[] = Array.from({ length: 50000 }, (_, i) => i * 2);
    const c2: number[] = Array.from({ length: 50000 }, (_, i) => 99999 - i * 2);
    const c3: number[] = [];
    const expected = Array.from({ length: 100000 }, (_, i) => i);
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
});
