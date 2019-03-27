import { WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Client, Server } from 'socket.io';
export declare class EventsGateway {
    constructor();
    server: Server;
    findAll(client: Client, data: any): Observable<WsResponse<number>>;
    identity(client: Client, data: number): Promise<number>;
}
