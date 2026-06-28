// Lesson: Writing your first tests
export function max(a, b) {
  return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
  
}

export function calculateAverage(numbers){
  if(numbers.length === 0)return NaN;
  if(numbers.length === 1) return numbers[0];

  return numbers.reduce((sum, curr) => sum = curr + sum , 0) / numbers.length;
}

export function factorial(number){
  if(number === 0 || number === 1 ) return 1;
  if (number < 0 || !Number.isInteger(number)) return undefined;
  return number * factorial(number-1)
}
