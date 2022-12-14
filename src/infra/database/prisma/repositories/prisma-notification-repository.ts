import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notification.repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";


@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {

    constructor(private prismaService: PrismaService) {}
    


    async create(notification: Notification): Promise<void> {

        const raw = PrismaNotificationMapper.toPrisma(notification)

        await this.prismaService.notification.create({ 
            data: raw,
        });
    }


    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
    
    async save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}