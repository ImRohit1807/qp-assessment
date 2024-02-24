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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grocery_item_model_1 = require("../grocery-item/grocery-item.model");
const order_model_1 = require("../grocery-item/order.model");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userOrderRepository, groceryItemRepository) {
        this.userOrderRepository = userOrderRepository;
        this.groceryItemRepository = groceryItemRepository;
    }
    async viewItems() {
        return this.groceryItemRepository.find();
    }
    async bookItems(createOrderDto) {
        const order = new order_model_1.Order();
        order.items = await Promise.all(createOrderDto.items.map(async (itemDto) => {
            const groceryItem = await this.groceryItemRepository.findOne({
                where: {
                    id: itemDto.itemId,
                },
            });
            if (!groceryItem) {
                throw new common_1.NotFoundException(`Grocery item with ID ${itemDto.itemId} not found`);
            }
            if (groceryItem.inventory < itemDto.quantity) {
                throw new common_1.NotFoundException(`Not enough inventory for item with ID ${itemDto.itemId}`);
            }
            groceryItem.inventory -= itemDto.quantity;
            await this.groceryItemRepository.save(groceryItem);
            return groceryItem;
        }));
        return this.userOrderRepository.save(order);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_model_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(grocery_item_model_1.GroceryItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map