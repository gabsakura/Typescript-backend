"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
exports.router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
exports.router.post('/user', userController.createUser);
exports.router.get('/user', userController.getAllUsers);
exports.router.delete('/user', (request, response) => {
    const user = request.body;
    console.log('Deletando usuário...', user);
    return response.status(200).json({ message: 'Usuário deletado' });
});
