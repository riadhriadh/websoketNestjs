import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EventsGateway } from '../events/events.gateway';

@Module({
  controllers: [UsersController],
  providers: [UsersService, EventsGateway],
})
export class UsersModule {}
