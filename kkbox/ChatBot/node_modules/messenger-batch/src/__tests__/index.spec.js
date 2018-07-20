const { MessengerBatchQueue, isError613 } = require('../');

it('MessengerBatchQueue should be exported', () => {
  expect(MessengerBatchQueue).toBeDefined();
});

it('error predicate should be exported', () => {
  expect(isError613).toBeDefined();
});
