import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { StateInterface } from './state.interface';
import { Action } from './action';
/**
 * This store represents the state of the application just like a redux store.
 * The difference is that the reducers are not forced to be pure functions. 
 * This allows to develop games that are more performant and are easier to write
 * that if we would need to keep the changes in pure functions. 
 * 
 * 
 * This store is based on two main principles: 
 * 
 * First, it offers a standardized way to update the state of the game via 
 * actions, which are objects that describes an intent to update the state.
 * This is an implementation of the Command design pattern, but the actions
 * are not the one to manipulate the state of the game. They only describe
 * an intent to update the state.
 * 
 * Second, the state is managed through a single input of actions, which means
 * that all state manipulations can easily be tracked down and logged. Through
 * that mecanism, we have a separation between the model and the view.
 * 
 * T is the type of the state.
 * A is the type of the actions.
 */
export class Store<T extends StateInterface, A extends Action> {
    private _state: BehaviorSubject<T>;
    private _actionStream: Subject<A>;

    constructor(defaultState: T) {
        this._state = new BehaviorSubject(defaultState);
        this._actionStream = new Subject();
    }

    dispatch(action: A): void {
        if(action.type === undefined) {
            throw new Error("Actions must have a field named 'type'.");
        }

        this._actionStream.next(action);
    }

    getObservableState(): Observable<T> {
        return this._state.asObservable();
    }

    getCurrentState(): T {
        return this._state.getValue();
    }

    getActions(): Observable<A> {
        return this._actionStream.asObservable();
    }

    /** 
     * Frees up the resources used by the store. You won't be able to retrieve the 
     * state of the store afterward.
     */
    destructor(): void {
        this._state.complete();
        this._actionStream.complete();
    }
}