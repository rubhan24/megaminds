const userController = require('../../../controllers/users')
const User = require('../../../model/Users')


const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }


let testUser = {username: "Ben", score: 10}




describe('users controllers', ()=>{
    beforeEach(()=> jest.clearAllMocks());
    afterAll(()=>jest.resetAllMocks());

    describe('get all users', ()=>{
        test('it returns all players with a status code of 200', async ()=>{
            jest.spyOn(User, 'all', 'get')
                .mockResolvedValue([{}, {}, {}, {}])
            await userController.getAllUsers(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith([{},{},{},{}])
        })
        
    })


    describe('create user', ()=>{
        test('it creates a user with a status code of 201', async ()=>{
            jest.spyOn(User, 'createUser')
                .mockResolvedValue(expect.objectContaining(testUser))
            
            const mockRequest = {
               body: {  testUser}
            }

            await userController.createUser(mockRequest, mockRes)
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(testUser); 
        })
        
    })

   
})