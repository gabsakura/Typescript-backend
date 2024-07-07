"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./UserController");
const mockResponse_mock_1 = require("../__mocks__/mockResponse.mock");
describe('UserController', () => {
    const mockUserService = {
        createUser: jest.fn()
    };
    const userController = new UserController_1.UserController(mockUserService);
    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        };
        const mockResponse = (0, mockResponse_mock_1.makeMockResponse)();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' });
    });
});
