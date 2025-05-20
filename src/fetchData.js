function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve('peanut butter'), 100);
  });
}

function fetchDataThatFails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 100);
  });
}

module.exports = { fetchData, fetchDataThatFails }; 