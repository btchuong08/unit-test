describe('Setup and Teardown example', () => {
  let users = [];

  beforeEach(() => {
    // Runs before *each* test in this describe block
    users = ['Alice', 'Bob'];
    console.log('Setup for a test');
  });

  afterEach(() => {
    // Runs after *each* test
    users = [];
    console.log('Cleanup after a test');
  });

  test('should add a new user', () => {
    users.push('Charlie');
    expect(users).toContain('Charlie');
    expect(users).toHaveLength(3);
  });

  test('should have initial users', () => {
    expect(users).toEqual(['Alice', 'Bob']);
    expect(users).toHaveLength(2);
  });
}); 