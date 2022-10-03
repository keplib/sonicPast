// import Playlist from "../src/views/Playlist.vue";

function increment(current, max = 10) {
  if (current < max) {
    return current + 1;
  }
  return current;
}

describe("increment", () => {
  test("increments the current number by 1", () => {
    expect(increment(0, 10)).toBe(1);
  });

  test("does not increment the current number over the max", () => {
    expect(increment(10, 10)).toBe(10);
  });

  test("has a default max of 10", () => {
    expect(increment(10)).toBe(10);
  });
});
