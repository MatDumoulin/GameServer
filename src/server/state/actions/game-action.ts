import { Action } from "redux";

export interface GameAction extends Action {
    type: string;
    payload?: any;
}