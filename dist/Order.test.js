"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
test("Should calculate the area of circle", function () {
    const cpfNumber = "111.444.777-35";
    const purchaseDescription = "Teclado Gamer";
    const price = 150;
    const quantity = 1;
    const discount = 5;
    const order = new Order_1.default(cpfNumber, purchaseDescription, price, quantity, discount);
    expect(order.orderPrice()).toBe(142.5);
    const cpftest = new Order_1.default(cpfNumber, purchaseDescription, price, quantity, discount);
    expect(cpftest.cpfValidator).toBeTruthy();
});
