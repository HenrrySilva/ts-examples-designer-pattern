import { DatabaseInMemory } from "./database-in-memory";
import './2-use-example'

/**
 * 3 - use example
 * Este exemplo remove todas as instancias criadas em DatabaseInMemory
 */


/** Visualizer nomes das instancias antes de remover elas */
const nameInstancesBeforeDropAll = DatabaseInMemory.getAllNameInstances()
console.log({ nameInstancesBeforeDropAll })

/** remover todas as instancias criadas */
DatabaseInMemory.dropAll();
const nameInstancesAfterDropAll = DatabaseInMemory.getAllNameInstances()
/** Imprimir nome das instancias depois de removida */
console.log({ nameInstancesAfterDropAll })
