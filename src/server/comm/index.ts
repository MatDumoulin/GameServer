export * from './socket-manager';
export * from './socket-server.interface';

// Dev note: 
// This library does not manage socket communication.
// The main concern is that we cannot always send the full state of the application to the clients,
// since it will be slow for games with "fog of war". These nuances depend on the game need