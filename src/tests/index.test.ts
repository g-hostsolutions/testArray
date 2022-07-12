import * as index from "../index";

describe("Test index function call 1", () => {
  const event = {
    array: [1, 2, 3, 5, 6, 8, 9],
  };

  test("should call handler with correct value 1", async () => {
    const response = await index.handler(event);
    const result = [1, 4, 9, 25, 36, 64, 81];

    expect(response).toEqual(result);
  });
});

describe("Test index function call 2", () => {
  const event = {
    array: [-2, -1],
  };

  test("should call handler with correct value 2", async () => {
    const response = await index.handler(event);
    const result = [1, 4];

    expect(response).toEqual(result);
  });
});

describe("Test index function call 3", () => {
  const event = {
    array: [-10, -5, 0, 5, 10],
  };

  test("should call handler with correct value 3", async () => {
    const response = await index.handler(event);
    const result = [0, 25, 25, 100, 100];

    expect(response).toEqual(result);
  });
});
