describe('Mock functions', () => {
  test('mock implementation', () => {
    const mockCallback = jest.fn(x => 42 + x);
    
    mockCallback(0);
    mockCallback(1);
    
    expect(mockCallback.mock.calls).toHaveLength(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.results[1].value).toBe(43);
  });

  test('mock return values', () => {
    const mockFn = jest.fn();
    
    mockFn.mockReturnValueOnce(true);
    mockFn.mockReturnValue(false);
    
    expect(mockFn()).toBe(true);
    expect(mockFn()).toBe(false);
    expect(mockFn()).toBe(false);
  });

  test('mock resolved values', async () => {
    const getUser = jest.fn().mockResolvedValue({ id: 1, name: 'John Doe' });
    
    await expect(getUser()).resolves.toEqual({ id: 1, name: 'John Doe' });
    expect(getUser).toHaveBeenCalledTimes(1);
  });
}); 