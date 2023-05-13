
describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe('add', () => {
      it('should return the sum of two positive numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      it('should return the sum of a positive and a negative number', () => {
        expect(calculator.add(2, -3)).toBe(-1);
      });
  
      it('should return the sum of two negative numbers', () => {
        expect(calculator.add(-2, -3)).toBe(-5);
      });
    });
  
    describe('subtract', () => {
      it('should return the difference of two positive numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      it('should return the difference of a positive and a negative number', () => {
        expect(calculator.subtract(2, -3)).toBe(5);
      });
  
      it('should return the difference of two negative numbers', () => {
        expect(calculator.subtract(-2, -3)).toBe(1);
      });
    });
  
    describe('divide', () => {
      it('should return the quotient of two positive numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
      });
  
      it('should return the quotient of a positive and a negative number', () => {
        expect(calculator.divide(6, -3)).toBe(-2);
      });
  
      it('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
      });
    });
  
    describe('multiply', () => {
      it('should return the product of two positive numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      it('should return the product of a positive and a negative number', () => {
        expect(calculator.multiply(2, -3)).toBe(-6);
      });
  
      it('should return the product of two negative numbers', () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
    });
});
  