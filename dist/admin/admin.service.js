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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grocery_item_model_1 = require("../grocery-item/grocery-item.model");
const typeorm_2 = require("typeorm");
let AdminService = class AdminService {
    constructor(groceryItemRepository) {
        this.groceryItemRepository = groceryItemRepository;
    }
    async addItem(item) {
        return this.groceryItemRepository.save(item);
    }
    async viewItems() {
        return this.groceryItemRepository.find();
    }
    async updateItem(id, item) {
        await this.groceryItemRepository.update(id, item);
        return this.groceryItemRepository.findOne({ where: { id: id } });
    }
    async removeItem(id) {
        await this.groceryItemRepository.delete(id);
    }
    async manageInventory(id, quantity) {
        const item = await this.groceryItemRepository.findOne({
            where: { id: id },
        });
        item.inventory += quantity;
        return this.groceryItemRepository.save(item);
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grocery_item_model_1.GroceryItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map