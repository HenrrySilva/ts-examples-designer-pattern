import { DatabaseInMemory } from './database-in-memory'
import './1-use-example'

/**
 * Segundo exemplo
 * Este exemplo demonstra o gerenciamento do database em memoria (DatabaseInMemory)
 */

const personInMemory = DatabaseInMemory.createOrGetInstance('persons');

/** Obter o índice do valor : João */
const { index: indexFound } = personInMemory.findIndexByData('Henrique') as DatabaseInMemory.DataFindIndexByData;

/** remover dado usando o índice do mesmo */
personInMemory.removeByIndexData(indexFound);

/** Imprimir antes de limpar dados */
personInMemory.print()

/** limpar dados da instancia de persons */
personInMemory.empty();

/** Imprimir depois de limpar dados */
personInMemory.print()
