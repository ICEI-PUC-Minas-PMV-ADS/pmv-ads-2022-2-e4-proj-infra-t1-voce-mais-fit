const dailyRegisterService = require('../services/dailyRegisterService');

//#region DailyRegister
describe('Get Daily Register by Id', () => {
    it('should return a Daily Register if Id match', () => {
        //todo: implement
    })

    it('should return an error 404 if doesnt match Id', () => {
        //todo: implement
    })
})

describe('Get Daily Register by Date', () => {
    it('should return a existent Daily Register if Gymgoer Id and Date match', () => {
        //todo: implement
    })

    it('should create a new Daily Register if GymgoerId match but not Date', () => {
        //todo: implement
    })

    it('should return an error 404 if doesnt match GymgoerId', () => {
        //todo: implement
    })

    it('should return an error 500 if Date is in wrong format', () => {
        //todo: implement
    })
})

describe('Get all Daily Register by GymgoerId', () => {
    it('should return an error 404 if doesnt match GymgoerId', () => {
        //todo: implement
    })

    it('should return an array of Daily Registers, sorted by most recent date, if database has data', () => {
        //todo: implement
    })

    it('should return an empty array if database has no data', () => {
        //todo: implement
    })
})

describe('Create new Daily Register', () => {
    it('should return an error 404 if doesnt match GymgoerId', () => {
        //todo: implement
    })

    it("should automatically set 'totalKcal' based on 'totalCarb', 'totalProtein' and 'totalFat'", () => {
        //todo: implement
    })

    it('should set all properties automatically, if they are not given', () => {
        //todo: implement
    })

    it('should add a new DailyRegister to the database', () => {
        //todo: implement
    })
})
//#endregion

//#region Food Eaten in day
describe('Get All Food Eaten in Daily Register', () => {
    it('should return an array of Food Eaten if database has data', () => {
        //todo: implement
    })

    it('should return an empty array if database has no data', () => {
        //todo: implement
    })
})

describe('Add Food Eaten if Daily Register', () => {
    it('should automatically set foodEaten.kcal if it were not given', () => {
        //todo: implement
    })

    it('should add a new Food Eaten if Daily Register', () => {
        //todo: implement
    })

    it('should automatically set totalCarb, totalProtein, totalFat and totalKcal of Daily Register', () => {
        //todo: implement
    })

    it('should save the Food Eaten in Gymgoer->FoodSaved', () => {
        //todo: implement
    })
})

describe('Delete Food Eaten if Daily Register', () => {
    it('should return an error 404 if do not match FoodId', () => {
        //todo: implement
    })

    it('should remove the Food Eaten of Daily Register', () => {
        //todo: implement
    })

    it('should automatically set totalCarb, totalProtein, totalFat and totalKcal of Daily Register', () => {
        //todo: implement
    })
})
//#endregion
