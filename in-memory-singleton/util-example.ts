import { DatabaseInMemory } from './database-in-memory';

DatabaseInMemory.createOrGetInstance('persons')
    .add('João', 'Henrique', 'Maria', 'Fernanda');

DatabaseInMemory.createOrGetInstance('animals')
    .add('Cat', 'Dog', 'snake', 'bird')