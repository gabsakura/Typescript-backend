import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService;

    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    createUser = (req: Request, res: Response): Response => {
                const user = req.body;

        if (!user.name) {
            return res.status(400).json({ message: 'Bad request! Name obrigatório' });
        }

        if (!user.email) {
            return res.status(400).json({ message: 'Bad request! Email obrigatório' });
        }

        this.userService.createUser(user.name, user.email);
        return res.status(201).json({ message: 'Usuário criado' });
    };

    getAllUsers = (req: Request, res: Response): Response => {
        const users = this.userService.getAllUsers();
        return res.status(200).json(users);
    };

    deleteUser = (req: Request, res: Response): Response => {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Bad request! Name obrigatório' });
        }

        this.userService.deleteUser(name);
        return res.status(200).json({ message: 'Usuário deletado' });
    };
}
