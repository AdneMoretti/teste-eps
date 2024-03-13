export class DatabaseConnectionException extends Error {
    constructor(message: string) {
        super(message); 
        this.name = 'DatabaseConnectionException'
    }
}

export class DatabaseCreateTableException extends Error {
    constructor(message: string){
        super(message); 
        this.name = 'DatabaseCreateTableException'; 
    }
}
// Outras exceções relacionadas ao banco de dados...
