import { Action } from './action';

export interface StateInterface {
    on(action: Action): void;
}