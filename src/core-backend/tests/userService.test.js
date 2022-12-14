const userService = require('../services/userService');

describe('Get All Users', () => {
    it('should return an array of Users if database has data', () => {
        //todo: implement
    })

    it('should return an error 404 if database is null', () => {
        //todo: implement
    })
})

describe('Get User by Id', () => {
    it('should return an User if Id match', () => {
        //todo: implement
    })

    it('should return an error 404 if Id does not match', () => {
        //todo: implement
    })
})

describe('Create New User', () => {
    it("should validate user type valid values are 'trainer' and 'gymgoer'", () => {
        //todo: implement
    })

    it('should create a trainer if user type is trainer', () => {
        //todo: implement
    })

    it('should create a gymgoer if user type is gymgoer', () => {
        //todo: implement
    })

    it('should add a new user to the database', () => {
        //todo: implement
    })
})

describe('Update User by Id', () => {
    it('should return an error 404 if Id doesnt match any User', () => {
        //todo: implement
    })

    it('should keep same properties if they are not given', () => {
        //todo: implement
    })

    it('should update properties if they are given', () => {
        //todo: implement
    })

    it('should return an error 500 if tries to change userType', () => {
        //todo: implement
    })
})

describe('Delete User by Id', () => {
    it('should remove the user from the dabase if it exists', () => {
        //todo: implement
    })

    it('should return an error 404 if Id doesnt match any User', () => {
        //todo: implement
    })
})