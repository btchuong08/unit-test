const { getUser } = require('../src/userService');
const axios = require('axios');

jest.mock('axios');

describe('userService', () => {
  test('should fetch user data', async () => {
    axios.get.mockResolvedValue({ data: { id: 1, name: 'Test User' } });

    const user = await getUser(1);
    expect(user.name).toBe('Test User');
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
  });
}); 