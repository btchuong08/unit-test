const { add, subtract } = require('../src/calculator');

describe('Calculator operations', () => {
  test('add function should correctly sum two numbers', () => {
    expect(add(5, 3)).toBe(8);
  });

  it('subtract function should correctly subtract two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
}); 