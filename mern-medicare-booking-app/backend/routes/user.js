import express from 'express';

// user controller
import { getAllUsers, getSingleUser, updateUser, deleteUser} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;