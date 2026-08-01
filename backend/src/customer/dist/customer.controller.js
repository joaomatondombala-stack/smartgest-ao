"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CustomerController = void 0;
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var CustomerController = /** @class */ (function () {
    function CustomerController(customerService) {
        this.customerService = customerService;
    }
    CustomerController.prototype.create = function (createCustomerDto) {
        return this.customerService.create(createCustomerDto);
    };
    CustomerController.prototype.findAll = function () {
        return this.customerService.findAll();
    };
    CustomerController.prototype.findOne = function (id) {
        return this.customerService.findOne(+id);
    };
    CustomerController.prototype.update = function (id, updateCustomerDto) {
        return this.customerService.update(+id, updateCustomerDto);
    };
    CustomerController.prototype.remove = function (id) {
        return this.customerService.remove(+id);
    };
    __decorate([
        common_2.Post(),
        __param(0, common_2.Body())
    ], CustomerController.prototype, "create");
    __decorate([
        common_2.Get()
    ], CustomerController.prototype, "findAll");
    __decorate([
        common_2.Get(':id'),
        __param(0, common_2.Param('id'))
    ], CustomerController.prototype, "findOne");
    __decorate([
        common_2.Patch(':id'),
        __param(0, common_2.Param('id')), __param(1, common_2.Body())
    ], CustomerController.prototype, "update");
    __decorate([
        common_2.Delete(':id'),
        __param(0, common_2.Param('id'))
    ], CustomerController.prototype, "remove");
    CustomerController = __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_2.Controller('customer')
    ], CustomerController);
    return CustomerController;
}());
exports.CustomerController = CustomerController;
