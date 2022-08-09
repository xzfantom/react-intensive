import calculateActiveTodos from "./calculateActiveTodos";

test("Empty array", () => {
  expect(calculateActiveTodos([])).toEqual(0);
});

test("Only active", () => {
  expect(
    calculateActiveTodos([
      {
        id: 1660034950746,
        isDone: false,
        text: "1",
      },
    ])
  ).toEqual(1);
});

test("Three active todos", () => {
  expect(
    calculateActiveTodos([
      {
        id: 1660034950746,
        isDone: false,
        text: "1",
      },
      {
        id: 1660034952201,
        isDone: false,
        text: "2",
      },
      {
        id: 1660034953169,
        isDone: false,
        text: "3",
      },
    ])
  ).toEqual(3);
});

test("Three inactive todos", () => {
  expect(
    calculateActiveTodos([
      {
        id: 1660034950746,
        isDone: true,
        text: "1",
      },
      {
        id: 1660034952201,
        isDone: true,
        text: "2",
      },
      {
        id: 1660034953169,
        isDone: true,
        text: "3",
      },
    ])
  ).toEqual(0);
});

test("Three active, two inactive", () => {
  expect(
    calculateActiveTodos([
      {
        id: 1660034950746,
        isDone: false,
        text: "1",
      },
      {
        id: 1660034952201,
        isDone: true,
        text: "2",
      },
      {
        id: 1660034953169,
        isDone: false,
        text: "3",
      },
      {
        id: 1660035092769,
        isDone: true,
        text: "4",
      },
      {
        id: 1660035093738,
        isDone: false,
        text: "5",
      },
    ])
  ).toEqual(3);
});
