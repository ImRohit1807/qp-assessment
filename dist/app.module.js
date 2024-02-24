"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const admin_controller_1 = require("./admin/admin.controller");
const user_controller_1 = require("./user/user.controller");
const admin_service_1 = require("./admin/admin.service");
const user_service_1 = require("./user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const grocery_item_model_1 = require("./grocery-item/grocery-item.model");
const user_module_1 = require("./user/user.module");
const admin_module_1 = require("./admin/admin.module");
const order_model_1 = require("./grocery-item/order.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'interviewAssessment',
                entities: [grocery_item_model_1.GroceryItem, order_model_1.Order],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([grocery_item_model_1.GroceryItem, order_model_1.Order]),
            user_module_1.UserModule,
            admin_module_1.AdminModule,
        ],
        controllers: [app_controller_1.AppController, admin_controller_1.AdminController, user_controller_1.UserController],
        providers: [app_service_1.AppService, admin_service_1.AdminService, user_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map