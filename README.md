# merge-three-arrays

## Features
- Implements a `merge` function with the following interface:
  ```ts
  merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
  ```
- `collection_1` and `collection_3` must be sorted in ascending order (from min(0) to max).
- `collection_2` must be sorted in descending order (from max to min(0)).
- The result is a single array sorted in ascending order.
- No use of any built-in sort function.
- Includes unit tests with Jest.
- Includes a manual input script for merging arrays from the console.

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Run unit tests
```sh
npm test
```

### 3. Build the project
```sh
npm run build
```

### 4. Run manual input (console)
```sh
node dist/main.js
```
You will be prompted to enter three arrays:
- `collection_1`: ascending order, separated by spaces
- `collection_2`: descending order, separated by spaces
- `collection_3`: ascending order, separated by spaces

If the input is not sorted as required, an error will be shown.
