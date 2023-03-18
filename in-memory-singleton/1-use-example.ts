import { DatabaseInMemory } from './database-in-memory';
import './util-example'

/**
 *  Primeiro Example
 * Este exemplo demonstra que esta sendo criado apenas uma instancia da classe DatabaseInMemory
 * obs: está sendo usado o method chaining ( encadeamento de métodos)
 */
DatabaseInMemory.createOrGetInstance<string>('persons')
    .add('Antônio', 'Joyce', 'Marco', 'Jose')
    .print();

DatabaseInMemory.createOrGetInstance<string>('animals')
    .add('Mouse', 'Spider', 'Elephant', 'Lion')
    .print()