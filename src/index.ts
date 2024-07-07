import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';

const app = express();
app.use(express.json());

const userController = new UserController();

app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);
app.delete('/users', userController.deleteUser);

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Not Found' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
