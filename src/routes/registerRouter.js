import { Router } from 'express';
import RegisterController from '../controllers/RegisterController.js';

const router = Router();
const registerController = new RegisterController();

router.get('/register', registerController.index);
router.post('/register', registerController.register);

export default router;
