import healthLevel from '../health';

test('level of health healthy', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  expect(healthLevel(character) === 'healthy');
});

test('level of health wounded', () => {
  const character = {
    name: 'Маг',
    health: 45,
  };
  expect(healthLevel(character) === 'wounded');
});

test('level of health critical', () => {
  const character = {
    name: 'Маг',
    health: 5,
  };
  expect(healthLevel(character) === 'critical');
});
