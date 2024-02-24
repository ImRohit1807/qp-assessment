"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const grocery_item_model_1 = require("../grocery-item/grocery-item.model");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    addItem(item) {
        return this.adminService.addItem(item);
    }
    viewItems() {
        return this.adminService.viewItems();
    }
    updateItem(id, item) {
        return this.adminService.updateItem(id, item);
    }
    removeItem(id) {
        return this.adminService.removeItem(id);
    }
    manageInventory(id, data) {
        return this.adminService.manageInventory(id, data.quantity);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('add-item'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [grocery_item_model_1.GroceryItem]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "addItem", null);
__decorate([
    (0, common_1.Get)('view-items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "viewItems", null);
__decorate([
    (0, common_1.Put)('update-item/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateItem", null);
__decorate([
    (0, common_1.Delete)('remove-item/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "removeItem", null);
__decorate([
    (0, common_1.Put)('manage-inventory/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "manageInventory", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map