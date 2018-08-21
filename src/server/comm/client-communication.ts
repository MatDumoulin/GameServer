import { Server } from 'socket.io';

export class ClientCommunication {
    private _io: Server;

    constructor(server: Server) {
        if(!server) {
            throw Error("The server must be provided to set up the communication with the client.");
        }

        this._io = server;
    }

    begin() {
        this._io.on('connection', (client) => {
            // TODO: Investigate what is the best option to set up the socket communication. 
            //       The main concern is that we cannot always send the full state of the application to the clients,
            //       since it will be slow for games with "fog of war". 
        });
    }
}