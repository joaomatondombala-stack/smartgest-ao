"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Customer = void 0;
var typeorm_1 = require("typeorm");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Customer.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Customer.prototype, "nome");
    __decorate([
        typeorm_1.Column({ unique: true })
    ], Customer.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], Customer.prototype, "telefone");
    __decorate([
        typeorm_1.Column()
    ], Customer.prototype, "endereco");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "nif");
    Customer = __decorate([
        typeorm_1.Entity('customers')
    ], Customer);
    return Customer;
}());
exports.Customer = Customer;
