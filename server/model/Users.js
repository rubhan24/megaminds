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
                const result = await data.map(player => {
                         db.query(`insert into users (username, score) values ($1, $2) returning * ;`, [player.username, player.score])
                    })
                    console.log(result)
                    const allUsers = result.rows.map(player  => new Users(player))
                    resolve(allUsers)
            } catch (error) {
                reject(`Failed to store user`)
            }
        })
    }


}

module.exports = Users