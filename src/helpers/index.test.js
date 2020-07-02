import { getLetterMatchCount } from "./index";

describe("get letter match count", () => {
  const secretWord = "train";
  test("when there is 0 letter match", () => {
    const result = getLetterMatchCount("sleep", secretWord);
    expect(result).toBe(0);
  });

  test("when there are 3 letter match", () => {
    const result = getLetterMatchCount("trade", secretWord);
    expect(result).toBe(3);
  });

  test("when there are duplicated letters match", () => {
    const result = getLetterMatchCount("lynna", secretWord);
    expect(result).toBe(2);
  });
});
