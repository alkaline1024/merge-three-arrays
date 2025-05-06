import { merge } from "./merge";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function parseInput(input: string): number[] {
  if (!input.trim()) return [];
  const arr = input.trim().split(/\s+/).map(Number);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      throw new Error("Please enter sorted arrays (acending).");
    }
  }
  return arr;
}

function parseInputDesc(input: string): number[] {
  if (!input.trim()) return [];
  const arr = input.trim().split(/\s+/).map(Number);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      throw new Error("Please enter sorted arrays (descending).");
    }
  }
  return arr;
}

console.log("Please enter ascending array for collection_1 (separated by spaces):");
rl.question("", (c1) => {
  let arr1: number[];
  try {
    arr1 = parseInput(c1);
  } catch (e: any) {
    console.error(e.message);
    rl.close();
    return;
  }
  console.log("Please enter descending array for collection_2 (separated by spaces):"
);
  rl.question("", (c2) => {
    let arr2: number[];
    try {
      arr2 = parseInputDesc(c2);
    } catch (e: any) {
      console.error(e.message);
      rl.close();
      return;
    }
    console.log("Please enter ascending array for collection_3 (separated by spaces):"
);
    rl.question("", (c3) => {
      let arr3: number[];
      try {
        arr3 = parseInput(c3);
      } catch (e: any) {
        console.error(e.message);
        rl.close();
        return;
      }
      const result = merge(arr1, arr2, arr3);
      console.log("Result:", result);
      rl.close();
    });
  });
});
