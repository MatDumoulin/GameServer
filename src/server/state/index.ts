export * from './actions';
export * from './game-state';

/**
 * Dev Note: 
 * To manage the state, this library impose the use of Redux in order to abstract game state management
 * from game implementation. This choice allows many opportunities for future developments of the library,
 * such as game state serialization, record/playback, sharing the state between multiple server, etc.
 */