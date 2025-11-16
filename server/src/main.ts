import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app.module'
import * as net from 'net'

dotenv.config()

console.log('🧭 ENV CHECK:')
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Loaded' : '❌ Missing')
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Loaded' : '❌ Missing')
console.log('EMAIL_TO:', process.env.EMAIL_TO ? '✅ Loaded' : '❌ Missing')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  app.setGlobalPrefix('api')
  const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001

  function checkPort(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const tester = net
        .createServer()
        .once('error', () => resolve(false))
        .once('listening', () => {
          tester.close()
          resolve(true)
        })
        .listen(port)
    })
  }

  const isAvailable = await checkPort(DEFAULT_PORT)
  const portToUse = isAvailable ? DEFAULT_PORT : 4000

  await app.listen(portToUse)
  console.log(`✅ Server running on http://localhost:${portToUse}`)
}

bootstrap()




