import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { MailModule } from './mail/mail.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailModule,
    // Serve React build in production
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'client', 'dist'),
      exclude: ['/api*'],
    }),
  ],
})
export class AppModule {}




