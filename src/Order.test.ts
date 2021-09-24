import Order from "./Order";

test("Should calculate the order amount", function () {
  const cpfNumber = "111.444.777-35";
  const purchaseDescription = "Teclado Gamer";
  const price = 150;
  const quantity = 1;
  const discount = 5;

  const order = new Order(
    cpfNumber,
    purchaseDescription,
    price,
    quantity,
    discount
  );
  expect(order.orderPrice()).toBe(142.5);

});

test("Should validate if the cpf is valid", function () {
  const cpfNumber = "111.444.777-35";
  const purchaseDescription = "Teclado Gamer";
  const price = 150;
  const quantity = 1;
  const discount = 5;

  const cpftest = new Order(
    cpfNumber,
    purchaseDescription,
    price,
    quantity,
    discount
  );
  expect(cpftest.cpfValidator).toBeTruthy();
});
