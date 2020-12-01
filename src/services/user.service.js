import models from '../database/models';

const { User } = models;

class UserService{
    static createUser(user){
        return User.create(user);
    }
}

export default UserService;
