const countCharOccurrences = require("./challenge-1");
const checkNumber = require("./challenge-2");
const isLeapYear = require("./challenge-3");
const findSmallest = require("./challenge-4");
const classifyTemperature = require("./challenge-5");
const fizzBuzz = require("./challenge-6");

describe("Challenge 1 - countCharOccurrences", () => {
  it("should count occurrences of a character in a string", () => {
    expect(countCharOccurrences("hello", "l")).toEqual(2);
    expect(countCharOccurrences("banana", "a")).toEqual(3);
    expect(countCharOccurrences("racecar", "z")).toEqual(0);
  });
});

describe("Challenge 2 - checkNumber", () => {
  it('should classify a number as "Positive", "Negative", or "Zero"', () => {
    expect(checkNumber(5)).toEqual("Positive");
    expect(checkNumber(-3)).toEqual("Negative");
    expect(checkNumber(0)).toEqual("Zero");
  });
});

describe("Challenge 3 - isLeapYear", () => {
  it("should check if a year is a leap year", () => {
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
  });
});

describe("Challenge 4 - findSmallest", () => {
  it("should find the smallest number among three", () => {
    expect(findSmallest(10, 5, 8)).toEqual(5);
    expect(findSmallest(-3, -1, 0)).toEqual(-3);
    expect(findSmallest(7, 7, 7)).toEqual(7);
  });
});

describe("Challenge 5 - classifyTemperature", () => {
  it("should classify a temperature", () => {
    expect(classifyTemperature(0)).toEqual("Freezing");
    expect(classifyTemperature(7)).toEqual("Cold");
    expect(classifyTemperature(12)).toEqual("Mild");
    expect(classifyTemperature(23)).toEqual("Warm");
    expect(classifyTemperature(83)).toEqual("Hot");
  });
});

describe("Challenge 6 - fizzBuzz", () => {
  it("should implement the FizzBuzz game", () => {
    expect(fizzBuzz(3)).toEqual("fizz");
    expect(fizzBuzz(5)).toEqual("buzz");
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
    expect(fizzBuzz(7)).toEqual(7);
  });
});