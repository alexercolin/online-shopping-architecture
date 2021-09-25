export default class Order {
  cpf: string;
  description: string;
  price: number;
  quantity: number;
  discount: number;

  constructor(
    cpf: string,
    description: string,
    price: number,
    quantity: number,
    discount: number
  ) {
    this.cpf = cpf;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
  }

  cpfValidator(): any {
    if (this.cpf !== null) {
      function treatCpfNumber(cpf: string) {
        const cpfWithoutDots = cpf.replace(/\./g, "");
        const cpfWithoutTrace = cpfWithoutDots.replace("-", "");
        const cpfFirstNineDigits = cpfWithoutTrace.substring(0, 9);
        return cpfFirstNineDigits;
      }

      function firstValidation(cpf) {
        const cpfTreated = parseInt(treatCpfNumber(cpf));

        const convertIntInArray = Array.from(String(cpfTreated), Number);
        let counter = 10;
        while (counter > 2 ) {
          var oi = convertIntInArray.map((number) => number * counter);
          counter--;
        }

        return oi;
      }

      return firstValidation(this.cpf);
    }
  }

  orderPrice(): number {
    if (this.discount === 0) {
      return this.price * this.quantity;
    }
    return this.price * (1 - this.discount / 100) * this.quantity;
  }
}
