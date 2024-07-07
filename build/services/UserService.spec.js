"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./UserService");
describe('UserService', () => {
    const mockDb = [];
    const userService = new UserService_1.UserService(mockDb);
    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
    });
});
