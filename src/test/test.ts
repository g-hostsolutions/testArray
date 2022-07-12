export const doubleArray = (values: number[]): number[] => {
  const sortedArray = values.sort((a: number, b: number) => (a > b ? 1 : -1));

  console.log("INPUT >>> ", sortedArray);

  const doubledArray = sortedArray.reduce((prev: number[], curr: number) => {
    const value = curr * curr;
    if (!isNaN(value)) prev.push(value);
    return prev;
  }, []);

  const result = doubledArray.sort((a: number, b: number) => (a > b ? 1 : -1));
  console.log("OUTPUT >>> ", result);
  return result;
};
