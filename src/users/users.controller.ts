import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { EventsGateway } from '../events/events.gateway';
var io = require('socket.io');
import { Client, Server } from 'socket.io';

@Controller('')
export class UsersController {
  c: Client;
  constructor(private readonly subjectsService: EventsGateway) {}
  @Get() findUsers(@Res() res) {
    this.subjectsService.findAll(this.c, 'hello');
    return res.status(HttpStatus.OK).json({ succes: 1 });
  }
}
