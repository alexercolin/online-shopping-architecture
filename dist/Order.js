"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(cpf, description, price, quantity, discount) {
        this.cpf = cpf;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
    cpfValidator() {
        if (this.cpf !== null) {
            if (this.cpf !== undefined) {
                if (this.cpf.length >= 11 || this.cpf.length <= 14) {
                    this.cpf = this.cpf
                        .replace(".", "")
                        .replace(".", "")
                        .replace("-", "")
                        .replace(" ", "");
                    if (!this.cpf.split("").every((c) => c === this.cpf[0])) {
                        try {
                            let d1, d2;
                            let dg1, dg2, rest;
                            let digito;
                            let nDigResult;
                            d1 = d2 = 0;
                            dg1 = dg2 = rest = 0;
                            for (let nCount = 1; nCount < this.cpf.length - 1; nCount++) {
                                digito = parseInt(this.cpf.substring(nCount - 1, nCount));
                                d1 = d1 + (11 - nCount) * digito;
                                d2 = d2 + (12 - nCount) * digito;
                            }
                            rest = d1 % 11;
                            dg1 = rest < 2 ? (dg1 = 0) : 11 - rest;
                            d2 += 2 * dg1;
                            rest = d2 % 11;
                            if (rest < 2)
                                dg2 = 0;
                            else
                                dg2 = 11 - rest;
                            let nDigVerific = this.cpf.substring(this.cpf.length - 2, this.cpf.length);
                            nDigResult = "" + dg1 + "" + dg2;
                            return nDigVerific == nDigResult;
                        }
                        catch (e) {
                            console.error("Erro !" + e);
                            return false;
                        }
                    }
                    else
                        return false;
                }
                else
                    return false;
            }
        }
        else
            return false;
    }
    orderPrice() {
        if (this.discount === 0) {
            return this.price * this.quantity;
        }
        return this.price * (1 - this.discount / 100) * this.quantity;
    }
}
exports.default = Order;
