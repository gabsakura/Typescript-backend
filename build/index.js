"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./controllers/UserController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userController = new UserController_1.UserController();
app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);
app.delete('/users', userController.deleteUser);
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
