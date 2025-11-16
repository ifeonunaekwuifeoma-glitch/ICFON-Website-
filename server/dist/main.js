"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const net = require("net");
dotenv.config();
console.log('🧭 ENV CHECK:');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Loaded' : '❌ Missing');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Loaded' : '❌ Missing');
console.log('EMAIL_TO:', process.env.EMAIL_TO ? '✅ Loaded' : '❌ Missing');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.setGlobalPrefix('api');
    const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
    function checkPort(port) {
        return new Promise((resolve) => {
            const tester = net
                .createServer()
                .once('error', () => resolve(false))
                .once('listening', () => {
                tester.close();
                resolve(true);
            })
                .listen(port);
        });
    }
    const isAvailable = await checkPort(DEFAULT_PORT);
    const portToUse = isAvailable ? DEFAULT_PORT : 4000;
    await app.listen(portToUse);
    console.log(`✅ Server running on http://localhost:${portToUse}`);
}
bootstrap();
//# sourceMappingURL=main.js.map