
export namespace DatabaseInMemory {
    export type DataFindIndexByData = { data: any, index: number }
}
export class DatabaseInMemory<T> {

    private static _instances: DatabaseInMemory<any>[] = [];
    public name: string;
    private dataList: any[];

    private constructor(name: string) {
        this.name = name;
        this.dataList = [];
    }

    public static createOrGetInstance<T>(name: string): DatabaseInMemory<T> {
        try {
            if (DatabaseInMemory._instances.findIndex(instance => instance.name === name) === -1) {
                const databaseInMemory = new DatabaseInMemory<T>(name)
                DatabaseInMemory._instances.push(databaseInMemory);
                return databaseInMemory;
            }

            return DatabaseInMemory._instances.find(instance => instance.name === name) as DatabaseInMemory<any>;
        } catch (error) {
            throw error;
        }
    }

    public static getAllNameInstances(): string[] {
        return DatabaseInMemory._instances.map(instance => instance.name)
    }

    static dropAll() {
        DatabaseInMemory._instances = [];
    }

    add(...data: T[]): DatabaseInMemory<T> {
        try {
            this.dataList = [...data, ...this.dataList];
            return this;
        } catch (error) {
            throw error;
        }
    }

    removeByIndexData(dataIndex: number): boolean {
        const dataFoundByIndex = this.findDataByIndex(dataIndex);
        if (dataFoundByIndex === null)
            throw new Error('Cannot found data!');

        this.dataList = this.dataList.filter((_, index) => index !== dataIndex);
        return true;
    }

    findIndexByData(searchData: T): DatabaseInMemory.DataFindIndexByData | null {
        const dataIndexFound = this.dataList.findIndex(data => searchData === data);
        return dataIndexFound !== -1 ? { data: searchData, index: dataIndexFound } : null;
    }

    findDataByIndex(index: number): T | null {
        const dataFoundByIndex = this.dataList[index]
        return dataFoundByIndex ? dataFoundByIndex : null;
    }

    empty() {
        this.dataList = [];
    }

    print() {
        console.log({
            name_instance: this.name,
            data: this.dataList
        })
    }

}