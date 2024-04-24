import Person from '../Person';
import Team from '../Team';

test('классы "Person" и "Team" существуют', () => {
  expect(Person).toBeDefined();
  expect(Team).toBeDefined();
});

test('экземпляр класса "Person" имеет правильные имена свойств', () => {
  const expected = [
    'name',
    'type',
    'health',
    'level',
    'attack',
    'deffence',
  ];

  expect(Object.keys(new Person('person'))).toEqual(
    expect.arrayContaining(expected),
  );
});

const team = new Team();

test('класс "Team" имеет свойство "members" с помощью Set object', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

team.members.add(new Person('person'));

test('экземпляр класса "Team" имеет итератор', () => {
  const result = () => [...team];
  expect(result).not.toThrow();
  expect(result()).toEqual([...team.members]);
});