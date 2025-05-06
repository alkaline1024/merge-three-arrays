export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];
  // skip if collections are empty
  let c1Finished = collection1.length === 0;
  let c2Finished = collection2.length === 0;
  let c3Finished = collection3.length === 0;

  // pointers for each collection
  let i = 0;
  let j = collection2.length - 1;
  let k = 0;

  while (!c1Finished || !c2Finished || !c3Finished) {
    const v1 = c1Finished ? Infinity : collection1[i];
    const v2 = c2Finished ? Infinity : collection2[j];
    const v3 = c3Finished ? Infinity : collection3[k];

    // find lowest value
    const min = Math.min(v1, v2, v3);
    result.push(min);

    // move pointer to next value
    if (min === v1) {
      i++;
      if (i >= collection1.length) {
        c1Finished = true;
      }
    } else if (min === v2) {
      // j pointer is reversed
      j--;
      if (j < 0) {
        c2Finished = true;
      }
    } else {
      k++;
      if (k >= collection3.length) {
        c3Finished = true;
      }
    }
  }

  return result;
}
