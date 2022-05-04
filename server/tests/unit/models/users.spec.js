const Users = require('../../../model/Users')

const pg = require('pg');
jest.mock('pg');

const db = require('../../../db_Config/config')

describe('Users', ()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
        jest.setTimeout(15000)

    })
    
    afterAll(()=>jest.resetAllMocks())

    describe('getAllUsers', ()=>{
        test('it resovles all player information on successfull db query', async ()=>{
            jest.spyOn(db, 'query')
            .mockResolvedValueOnce({ rows: [{}, {}, {}, {}]})
            const all = await Users.all;
            expect(all).toHaveLength(4)
        })


        test('the error message for get all is correct', async () => {
            return Users.all.catch(error => {
                expect(error).toBe('Error retrieving user information')
            })
        })
    })

    describe('create', ()=>{
        test('it resolves with successfully created player', async ()=>{
            let testUser = [{username: "Ben", score: 10}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser[0], id:1}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual([{"id": 1, "score": 10, "username": "Ben"}])
        })

        test('it resolves with successfully created player(2)', async ()=>{
            let testUser = [{username: "Ben", score: 10}, {username: "Mark", score: 5}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{username: "Ben", score: 10, id:1}, {username: "Mark", score: 5, id:2}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual()
        })

        test('it resolves with successfully created player(3)', async ()=>{
            let testUser = [{username: "Ben", score: 10}, {username: "Ben", score: 10}, {username: "Ben", score: 10}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser, id:1}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual()
        })

        test('it resolves with successfully created player(4)', async ()=>{
            let testUser = [{username: "Ben", score: 10}, {username: "Ben", score: 10}, {username: "Ben", score: 10},{username: "Ben", score: 10} ]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser, id:1}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual()
        })


        test('the error message is correct', async ()=>{
            return Users.createUser('testing').catch(error=>{
                expect(error).toBe('Failed to store user')
            })
        })
    })


})