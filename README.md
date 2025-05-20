# Node.js Unit Testing with Jest

This project demonstrates how to use Jest for unit testing Node.js applications.

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

To run all tests:
```bash
npm test
```

To run tests with coverage report:
```bash
npm test -- --coverage
```

To run tests in watch mode (automatically re-run when files change):
```bash
npm test -- --watchAll
```

To run a specific test file:
```bash
npm test -- path/to/test-file.test.js
```

## Test Organization

Tests can be organized in multiple ways:

1. `__tests__` directory (any .js files inside are treated as tests)
2. `.test.js` suffix (e.g., `sum.test.js`)
3. `.spec.js` suffix (e.g., `sum.spec.js`)

You can place test files anywhere in your project - Jest will find them automatically.

## Examples Included

This project includes examples demonstrating:

- Basic assertions (`sum.test.js`)
- Test organization with `describe` blocks (`calculator.test.js`)
- Setup and teardown (`setup-teardown.test.js`)
- Asynchronous testing (`fetchData.test.js`)
- Mock functions (`mock-functions.test.js`)
- Mocking modules (`userService.test.js`)
- Spying on methods (`spy.test.js`)

## Jest Configuration

Default configuration is sufficient for most projects. For additional configuration options, create a `jest.config.js` file:

```js
module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
```

## Best Practices

1. Keep tests independent
2. Follow the AAA pattern: Arrange, Act, Assert
3. Test one behavior per test
4. Use descriptive test names
5. Mock external dependencies
6. Aim for good coverage of critical logic

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Jest API Reference](https://jestjs.io/docs/api) 