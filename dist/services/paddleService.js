"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paddle_node_sdk_1 = require("@paddle/paddle-node-sdk");
const api_key = process.env.PADDLE_API_KEY || "pdl_sdbx_apikey_01jxvj9mwcdrb1gp6f7jjctnft_hYET88dZ4Qb71eXngkxnvj_AR0";
const paddleConfig = new paddle_node_sdk_1.Paddle(api_key, {
    environment: paddle_node_sdk_1.Environment.sandbox
});
class PaddleService {
    async getPackages() {
        const items = paddleConfig.products.list();
        const prods = await items.next();
        return prods;
    }
}
exports.default = new PaddleService();
