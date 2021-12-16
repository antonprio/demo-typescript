import { Request, Response } from 'express';
import UserService from '../services/user.service';
import ResponseHelper from '../utils/response';

const getUsers = async (req: Request, res: Response) => {
  const response = new ResponseHelper(0, '', null)

  try {
    const result = await UserService.getAllUsers();
  
    return res.status(200).json(result);
  } catch (error: any) {
    response.setStatus(0);
    response.setMessage(error.message);
    response.setError(true);

    return res.status(500).json(response.value());
  }
};

const createUser = async (req: Request, res: Response) => {
  const response = new ResponseHelper(0, '', null)

  try {
    const { username, firstname, middlename, lastname, age } = req.body;
    const userData: object = { username, firstname, middlename, lastname, age };
    const results: any = await UserService.createUser(userData);
    const statusCode: number = (results.error) ? 400 : 201;

    return res.status(statusCode).json(results);
  } catch (error: any) {
    response.setStatus(0);
    response.setMessage(error.message);
    response.setError(true);

    return res.status(500).json(response.value());
  }
};

const updateUser = async (req:Request, res: Response) => {
  const response = new ResponseHelper(0, '', null)

  try {
    const objectId: string = req.params._id;
    const data = await UserService.updateUser(req.body, objectId);

    return res.status(200).json(data);
  } catch (error: any) {
    response.setStatus(0);
    response.setMessage(error.message);
    response.setError(true);

    return res.status(500).json(response.value());
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const response = new ResponseHelper(0, '', null);

  try {
    const userId: string = req.params._id;
    const data: any = await UserService.deleteUser(userId);
    const statusCode: number = (data.get) ? 400 : 200;

    return res.status(statusCode).json(data);
  } catch (error: any) {
    response.setMessage(error.message);
    response.setError(true);

    return res.status(500).json(response.value());
  }
}

export default { getUsers, createUser, updateUser, deleteUser }