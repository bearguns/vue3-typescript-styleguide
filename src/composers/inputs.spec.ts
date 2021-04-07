import {
  validateRequired,
  validateIncluded,
  validateExcluded,
  InputValue,
  Allow,
  Include,
} from "./inputs";

describe("Unit | Composers | Inputs", () => {
  test("Returns invalid if required field blank", () => {
    const empty: boolean = validateRequired("");
    expect(empty).toBe(false);
  });

  test("Returns valid if required field contains input value", () => {
    const notEmpty: boolean = validateRequired("Required.");
    expect(notEmpty).toBe(true);
  });

  test("Returns true if at least 1 included characters present (not strict)", () => {
    const include: Include = { chars: ["!", ".", "?"], strict: false };
    const goodValue: InputValue = "?Hello!";

    expect(validateIncluded(goodValue, include)).toBe(true);
  });

  test("Returns false if no included characters present (not strict)", () => {
    const include: Include = { chars: ["!", ".", "?"], strict: false };
    const badValue: InputValue = "hello";
    expect(validateIncluded(badValue, include)).toBe(false);
  });

  test("Returns true if all included characters present (strict)", () => {
    const include: Include = { chars: ["!", ".", "?"], strict: true };
    const value: InputValue = "Hey! You there. Nice day, yeah?";
    expect(validateIncluded(value, include)).toBe(true);
  });

  test("Returns false if not all included characters present (strict)", () => {
    const include: Include = { chars: ["!", ".", "8"], strict: true };
    const value: InputValue = "Hey! Nice day, agent 7.";
    expect(validateIncluded(value, include)).toBe(false);
  });

  test("Returns true if no excluded characters present", () => {
    const exclude = ["!", ".", "8"];
    const value = "G'day, mate";
    expect(validateExcluded(value, exclude)).toBe(true);
  });

  test("Returns false if excluded characters present", () => {
    const exclude = ["!", ".", ",", "@"];
    const value = "Hey! What a day. Also, don't @me.";
    expect(validateExcluded(value, exclude)).toBe(false);
  });
});
