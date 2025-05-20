const { fetchData, fetchDataThatFails } = require('../src/fetchData');

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1); // Important for async errors
  try {
    await fetchDataThatFails();
  } catch (e) {
    expect(e).toMatch('error');
  }
}); 