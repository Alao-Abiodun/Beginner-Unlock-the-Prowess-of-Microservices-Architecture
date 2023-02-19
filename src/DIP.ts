interface DataStore {
    get(data: string): any
    set(id: string, data: any): void;
}

class Database implements DataStore {

    get(data: string): any {
        console.log(data);
    }

    set(id: string, data: any): void {
        console.log(id, data);
    }
}

class UserService {
    constructor(private readonly dataStore: DataStore) {};

    get(id: string): any {
        this.dataStore.get(id);
    }

    set(id: string, data: any): void {
        this.dataStore.set(id, data);
    }
}