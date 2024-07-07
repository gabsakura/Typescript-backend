"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    constructor(userService = new UserService_1.UserService()) {
        this.createUser = (req, res) => {
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
        this.getAllUsers = (req, res) => {
            const users = this.userService.getAllUsers();
            return res.status(200).json(users);
        };
        this.deleteUser = (req, res) => {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ message: 'Bad request! Name obrigatório' });
            }
            this.userService.deleteUser(name);
            return res.status(200).json({ message: 'Usuário deletado' });
        };
        this.userService = userService;
    }
}
exports.UserController = UserController;
