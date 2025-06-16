"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5000;
const mongoDbConnect = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI || "");
        console.log('Connected to MongoDB!', mongoose_1.default.connection.name);
        app_1.default.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
exports.default = mongoDbConnect;
