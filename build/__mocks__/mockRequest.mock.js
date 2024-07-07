"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMockRequest = void 0;
const makeMockRequest = ({ params, query }) => {
    const request = {
        params: params || {},
        query: query || {}
    };
    return request;
};
exports.makeMockRequest = makeMockRequest;
