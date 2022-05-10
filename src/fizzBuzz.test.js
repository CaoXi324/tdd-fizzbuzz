import fizzBuzz from "./fizzBuzz";

describe('fizzBuzz', () => {
    it('should return 1', () => {
        const expectedNumber = 1;
        const result = fizzBuzz(expectedNumber);
        expect(expectedNumber).toEqual(result)
    });

    it('should return 2', () => {
        const expectedNumber = 2;
        const result = fizzBuzz(expectedNumber);
        expect(expectedNumber).toEqual(result)
    });




})