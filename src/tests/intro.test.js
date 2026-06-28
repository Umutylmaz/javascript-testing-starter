import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max, factorial } from "../intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2,1)).toBe(2);
    })
    it('should return the second argument if it is greater', () => {
        expect(max(1,2)).toBe(2);
    })
    it('should return the first argument if arguements are equal', () => {
        expect(max(1,1)).toBe(1);
    })
} )

describe('fizzBuzz', () => {
    it('should return FizzBuzz if arg is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('should return Fizz ifB arg is divisible by both 3', () => {
        expect(fizzBuzz(6)).toBe('Fizz');
    })
    it('should return FizzBuzz if arg is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })
    it('should return number as string if arg is not divisible by both 3 or 5', () => {
        expect(fizzBuzz(16)).toBe('16');
    })
})

describe('calculateAverage', () => {
    it( 'should return NaN if the given array is empty', () =>{
    expect(calculateAverage([])).toBe(NaN)
    })
    it( 'should calculate the average of an given array with single element',() => {
        expect(calculateAverage([2])).toBe(2)
    })
    it( 'should  calculate the average of an given array with single element',() => {
        expect(calculateAverage([2])).toBe(2)
    })
})

describe('factorial', () => {
    it('should return 1 if given is 0',() => {
        expect(factorial(0)).toBe(1)
    })
    it('should return 1 if given is 1',() => {
        expect(factorial(1)).toBe(1)
    })
    it('should return 2 if given is 2',() => {
        expect(factorial(2)).toBe(2)
    })
  
    it('should return 6 if given is 3',() => {
        expect(factorial(3)).toBe(6)
    })
  
    it('should return 24 if given is 4',() => {
        expect(factorial(4)).toBe(24)
    })
  
    it('should return undefined if the input is not a valid number',() => {
        expect(factorial('asd')).toBeUndefined()
    })

})