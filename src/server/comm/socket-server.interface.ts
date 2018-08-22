export interface SocketServer {
    /**
     * Starts the socket server and listens for incoming events.
     */
    start(): void;
    
    /**
     * Ends all communication with the current server.
     */
    end(): void;
}