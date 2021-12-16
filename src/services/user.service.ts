import User from '../models/users.models';
import ResponseHelper from '../utils/response';

export default class UserService {
  static getAllUsers() {
    const result = new ResponseHelper(0, '', null);

    return new Promise(async (resolve, _) => {
      const usersData = await User.find().exec();

      result.setStatus(1);
      result.setMessage('ok');
      result.setData(usersData);

      resolve(result.value());
    });
  }

  static createUser(data: any) {
    const result = new ResponseHelper(0, '', null);

    return new Promise(async (resolve, reject) => {
      try {
        const checkUser: any = await User.findOne({ username: data.username });
        
        if (checkUser) {
          result.setStatus(0);
          result.setMessage('username already exists');
          result.setError(true);

          resolve(result.value());
        } else {
          const newUser = new User(data);
          await newUser.save();
  
          result.setStatus(1);
          result.setMessage('New User Added!');
          result.setData(newUser);
  
          resolve(result.value());
        }
      } catch (error: any) {
        console.log('error here', error)
        result.setStatus(0);
        result.setMessage(error.message);
        result.setError(true);

        reject(result.value());
      }
    })
  }

  static updateUser(data: any, userId: string) {
    const response = new ResponseHelper(0, '', null);

    return new Promise(async (resolve, reject) => {
      try {
        const condition = {_id: userId };
        const updateData = await User.findOneAndUpdate(condition, data, { new: true });
        const message = (updateData) ? 'Update Success' : 'Update Failed, user not found';
        response.setStatus(1);
        response.setMessage(message);
        response.setData(updateData);
        
        resolve(response.value());
      } catch (error: any) {
        response.setStatus(0);
        response.setMessage(error.message);
        response.setError(true);

        reject(response.value());
      }
    });
  }

  static deleteUser(userId: string) {
    const response = new ResponseHelper(0, 'delete user', null);

    return new Promise(async (resolve, reject) => {
      try {
        const condition = { _id: userId };
        const deleteUser = await User.findOneAndDelete(condition);
        const message = (deleteUser) ? `User with id ${userId} was deleted` : 'User Not Found';

        response.setStatus(1);
        response.setMessage(message);

        resolve(response.value());
      } catch (error: any) {
        response.setMessage(error.message);
        response.setError(true);

        reject(response.value());
      }
    });
  }
}