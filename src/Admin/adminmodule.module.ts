import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller"
import { AdminEntity } from "./Entity/adminEntity.entity";
import { AdminService } from "./adminservice.service"
import { TermandCoEntity } from "./Entity/termandCoEntity.entity";

@Module({
    imports:[
        MailerModule.forRoot({
            transport: {
              host: 'smtp.gmail.com',
                       port: 465,
                       ignoreTLS: true,
                       secure: true,
                       auth: {
                           user: 'mostaquenaimislam@gmail.com',
                           pass: 'yqpyvbocnbkjyggm'
                       },
                      }
          }
          
          ),
        TypeOrmModule.forFeature([AdminEntity,TermandCoEntity])],
controllers: [AdminController],
providers: [AdminService],
})

export class AdminModule {}