describe('jest.spyOn', () => {
  test('add method should be called', () => {
    const calculator = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
    };

    const addSpy = jest.spyOn(calculator, 'add');
    calculator.add(2, 3);
    
    expect(addSpy).toHaveBeenCalledWith(2, 3);
    expect(addSpy).toHaveBeenCalledTimes(1);
    
    addSpy.mockRestore(); // Clean up spy
  });
}); 