import express from 'express';
import userController from '../controllers/users.controller';
const router = express.Router();

router.get('/', userController.getUsers);
router.post('/add_user', userController.createUser);
router.put('/update_user/:_id', userController.updateUser);
router.delete('/delete_user/:_id', userController.deleteUser);

export { router as userRouter }