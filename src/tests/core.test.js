import {it, expect, describe, beforeEach, beforeAll, afterEach, afterAll} from 'vitest'
import { calculateDiscount, canDrive, fetchData, getCoupons, isPriceInRange, isValidUsername, Stack, validateUserInput } from '../core'

describe('getCoupons', () => {
    it('should return an array of coupons', () => {
        const coupons = getCoupons();
         expect(Array.isArray(coupons)).toBe(true);
         expect(coupons.length).toBeGreaterThan(0);
    })

    it('should return an array with valid coupon codes', () => {
        const coupons = getCoupons();
        coupons.forEach(coupon => {
            expect(coupon).toHaveProperty('code');
            expect(coupon).toHaveProperty('discount');
            expect(coupon.code).toBeTruthy();
        })
    })
  
    it('should return an array with valid discounts', () => {
        const coupons = getCoupons();
        coupons.forEach(coupon => {
            expect(coupon).toHaveProperty('discount');
            expect(typeof coupon.discount).toBe('number');
            expect(coupon.discount).toBeGreaterThan(0);
            expect(coupon.discount).toBeLessThan(1);
        })
    })

})

describe('calculateDiscount', () => {
    it('should return discounted price of if given valid code', () => {
        expect(calculateDiscount(10, 'SAVE10')).toBe(9);
    })

    it('should return discounted price of if given valid code', () => {
        expect(calculateDiscount(10, 'SAVE20')).toBe(8);
    })

    it('should handle non-numeric price', () => {
        expect(calculateDiscount('10', 'SAVE10')).toMatch(/invalid/i)
    })

    it('should handle negative price', () => {
        expect(calculateDiscount(-10, 'SAVE10')).toMatch(/invalid/i)
    })

    it('should handle non-string discount code', () => {
      expect(calculateDiscount(10, 10)).toMatch(/invalid/i)  
    })

    it('should handle invalid discount code', () => {
      expect(calculateDiscount(10, 'INVALID')).toBe(10)  
    })

})


describe('validateUserInput', () => {
    it('should handle valid Inputs ', () => {
        expect(validateUserInput('Umut',18)).toMatch(/success/i)
    })

    it('should return an error if username is not string', () => {
        expect(validateUserInput(5, 19)).toMatch(/invalid/i)
    })

    it('should return an error if username is less than 3 characters', () => {
        expect(validateUserInput('Aa', 19)).toMatch(/invalid/i)
    })

    it('should return an error if username is longer than 255 characters', () => {
        expect(validateUserInput('A'.repeat(256), 19)).toMatch(/invalid/i)
    })

    it('should return an error if age is not a number', () => {
        expect(validateUserInput('Ali', 'aa')).toMatch(/invalid/i)
    })
    
    it('should return an error if age is less than 18', () => {
        expect(validateUserInput('Ali', 17)).toMatch(/invalid/i)
    })

    it('should return an error if age is greater than 100', () => {
        expect(validateUserInput('Ali', 101)).toMatch(/invalid/i)
    })

    it('should return an error if both username and age are invalid', () => {
        expect(validateUserInput('li', 101)).toMatch(/invalid username/i);
        expect(validateUserInput('li', 101)).toMatch(/invalid age/i);
    })
})

describe('isPriceInRange', () => {
    it.each([
        {scenario: 'price < min', price: -10,  result: false},
        {scenario: 'price = min', price: 0,  result: true},
        {scenario: 'price is between min and max ', price: 50,  result: true},
        {scenario: 'price = max',price: 100,  result: true},
        {scenario: 'price > max', price: 200,  result: false},
    ])('should return $result when $scenario' , ({price, result}) => {
        expect(isPriceInRange(price, 0, 100)).toBe(result);
    })
})

describe('isValidUserName', () => {
    const minLength = 5;
    const maxLength = 15;

    it('should return false if the name is too short', () => {
        expect(isValidUsername('A'.repeat(minLength - 1))).toBe(false)
        expect(isValidUsername('Muhammet Mustafa')).toBe(false)
    })

    it('should return false if the name is too long', () => {
        expect(isValidUsername('A'.repeat(maxLength + 1))).toBe(false)
    })

    it('should return true if the name length is equal to the min and max', () => {
        expect(isValidUsername('a'.repeat(minLength))).toBe(true)
        expect(isValidUsername('a'.repeat(maxLength))).toBe(true)
    })
    
    it('should return true if the name is in the range', () => {
        expect(isValidUsername('a'.repeat(minLength + 1))).toBe(true)
        expect(isValidUsername('a'.repeat(maxLength - 1))).toBe(true)
    })
    
    it('should return false if the name is invalid', () => {
        expect(isValidUsername(null)).toBe(false);
        expect(isValidUsername(undefined)).toBe(false);
        expect(isValidUsername([1,2,3,4,5])).toBe(false);
    })
    
})

describe('canDrive', () => {
    it('should return invalid if the country code is invalid', () => {
        expect(canDrive(17, 'TR')).toMatch(/invalid/i)
    })
    
    it.each([
        {age: 15, country: 'US', result: false },
        {age: 16, country: 'US', result: true },
        {age: 17, country: 'US', result: true },
        {age: 16, country: 'UK', result: false },
        {age: 17, country: 'UK', result: true },
        {age: 18, country: 'UK', result: true },
    ])('should return $result for $age, $country', ({age, country, result}) => {
        expect(canDrive(age, country)).toBe(result)
    })
})

describe('fetchData', () => {
    it('should return a promise that will resolve to an array of an number',async() => {
        try {
        const result = await fetchData();
        
        } catch (error) {
             expect(error).toHaveProperty('reason');
             expect(error.reason).toMatch(/fail/i);
        }
        // expect(Array.isArray(result)).toBe(true);
        // expect(result.length).toBeGreaterThan(0);
    })
})

describe('test suite', () => {
    beforeAll(() => {
        console.log('beforeAll called')
    })

    beforeEach(() => {
        console.log('beforeEach called')
    })

    afterAll(() => {
        console.log('afterAll called')
    })

    afterEach(() => {
        console.log('afterEach called')
    })
    
    it('test case 1', () => {})
    it('test case 2', () => {})
})

describe('Stack', () => {
    let stack;
    beforeEach(() =>     
    {stack = new Stack()})
    
    it('push should add an item to the stack', () => {

        stack.push(1)

        expect(stack.size()).toBe(1);
    })

    it('pop should remove and return the top item from the stack', () => {
        stack.push(1);
        stack.push(2);
        
        const poppedItem = stack.pop();

        expect(poppedItem).toBe(2)
        expect(stack.size()).toBe(1)
    })
    
    it('pop should throw an error if the stack is empty', () => {
        expect(() => stack.pop()).toThrow(/empty/i)
    })
    
    
    it('peek should return the top item from the stack without removing it', () => {
        stack.push(1);
        stack.push(2);
        
        const peekedItem = stack.peek();
        
        expect(peekedItem).toBe(2)
        expect(stack.size()).toBe(2)
    })
    
    it('peek should throw an error if the stack is empty', () => {
        expect(() => stack.peek()).toThrow(/empty/i)
    })

    it('isEmpty should return true if stack is empty', () => {
        expect(stack.isEmpty()).toBe(true)
    })

    it('isEmpty should return false if stack is not empty', () => {
        stack.push(1)
        expect(stack.isEmpty()).toBe(false)
    })

    it('size should return number of items in the stack', () => {
        stack.push(1)
        stack.push(2)
        expect(stack.size()).toBe(2)
    })

    it('clear should remove all items in the stack', () => {
        stack.push(1)
        stack.push(2)

        stack.clear();

        expect(stack.size()).toBe(0)
    })

   
    
})