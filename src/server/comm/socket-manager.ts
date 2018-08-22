import { Socket } from 'socket.io';

/**
 * Maps the given socket to an Id in order to access the wanted socket easily.
 * This class is essentially a map that contains a reference on the given sockets.
 * For this purpose, it is important to clear the references on the sockets when 
 * the socket is closed in order to prevent memory leaks.
 */
export class SocketManager {
    /**
     * This map contains the client id and its socket.
     */
    private _socketMap: Map<string, Socket>;

    constructor() {
        this._socketMap = new Map<string, Socket>();
    }

    /**
     * Adds the given socket in the manager. This function can be use to replace the socket value for a given id,
     * but it should not be used to remove a socket since the id will remain in the map which can cause false positive
     * when the has() function is called.
     * @param id The id of the socket to manage. It can be the socket id, the client id or any other identifier.
     * @param socket The socket to manage.
     */
    set(id: string, socket: Socket): void {
        this._socketMap.set(id, socket);
    }

    has(id: string): boolean {
        return this._socketMap.has(id);
    }

    /**
     * This function has the same behaviour as its equivalent in javascript Maps. 
     * Returns true if an element in the manager object existed and has been removed, 
     * or false if the element does not exist. 
     * SocketManager.has(id) will return false afterwards.
     * @param id The id of the socket to remove from the manager. This does not close the connection
     * to the socket. 
     */
    delete(id: string): boolean {
        return this._socketMap.delete(id);
    }

    /**
     * Removes all references that this manager holds. It clear all entry in the manager.
     * This does not close any connection to the sockets.
     */
    clear(): void {
        this._socketMap.clear();
    }
}