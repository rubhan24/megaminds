const db = require("../db_Config/config")

class Users {
    constructor(data){
        this.users_id = data.id
        this.username = data.username
        this.score = data.score
    }

    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(`SELECT * FROM users ORDER BY score DESC limit 10;`)
                const allUsers = result.rows.map(player => new Users(player))
                resolve(allUsers)
            } catch (error) {
                reject(`Error retrieving user information`)
            }
        
        })
    }

    static createUser(data){
        return new Promise(async (resolve, reject) => {
            try {
                if (data[0] && !data[1] && !data[2] && !data[3]){
                    const player1 = await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    resolve ([player1.rows[0]])
                } else if (data[0] && data[1] && !data[2] && !data[3]){
                    const player1 = await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    const player2 = await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[1].username, data[1].score])
                    resolve ([player1.rows[0], player2.rows[0]])
                } else if (data[0] && data[1] && data[2] && !data[3]){
                    const player1= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    const player2= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[1].username, data[1].score])
                    const player3= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[2].username, data[2].score])
                    resolve ([player1.rows[0], player2.rows[0], player3.rows[0]])
                } else if (data[0] && data[1] && data[2] && data[3]){
                    const player1= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    const player2= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[1].username, data[1].score])
                    const player3= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[2].username, data[2].score])
                    const player4= await db.query(`insert into users (username, score) values ($1, $2) RETURNING *;`, [data[3].username, data[3].score])
                    resolve ([player1.rows[0], player2.rows[0], player3.rows[0], player4.rows[0]])
                }
            } catch (error) {
                reject(`Failed to store user`)
            }
        })
    }
}

module.exports = Users