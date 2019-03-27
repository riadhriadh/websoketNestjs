import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'socket.io';
import { Server } from 'ws';

@WebSocketGateway()
export class EventsGateway {
  constructor() {
    console.log('hello wen socket');
  }
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('events')
  findAll(client: Client, data: any): Observable<WsResponse<number>> {
    console.log('message emit ', data, 'client', client);
    this.server.emit('events', 'can you hear me?');
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(client: Client, data: number): Promise<number> {
    return data;
  }
}
