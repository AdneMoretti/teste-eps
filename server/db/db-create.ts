import {Pool, PoolClient} from 'pg'

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    database: 'study-db', 
    password: 'postgres'
})

async function connectDb(): Promise<PoolClient> {
    try{
        var client = pool.connect(); 
        
    }
}

async function createUser(){
    try{
        try{
            await client.query(`
                CREATE TABLE IF NOT EXISTS USER(
                    cpf PRIMARY KEY NOT NULL, 
                    name VARCHAR(100), 
                    email VARCHAR(100)
                )
            `)
        }
        catch{
            console.log("Erro ao criar tabela")
        }
    }
    catch{
        console.log("Não foi possível conectar ao banco"); 
    }
}

async function populate_db(){
    await createUser(); 
}

populate_db(); 