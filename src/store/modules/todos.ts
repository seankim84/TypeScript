import {Record, List} from 'immutable';
import {createAction, handleActions, Action} from 'redux-actions';

const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

type CreatePayload = string;
type RemovePayload = number;
type TogglePayload = number;
type Change_InputPayload = string;


export const actionCreators = {
    create : createAction<CreatePayload>(CREATE),
    remove : createAction<RemovePayload>(REMOVE),
    toggle : createAction<TogglePayload>(TOGGLE),
    changeInput : createAction<Change_InputPayload>(CHANGE_INPUT)
}

const TodoItemRecord = Record({
    id : 0,
    text : '',
    done: false
});

interface TodoItemDataParams {
    id?: number;
    text?: string;
    done?: boolean; 
}

export class TodoItemData extends TodoItemRecord {
    static autoId = 0;
    id: number;
    text: string
    done: boolean;
    constructor(params?: TodoItemDataParams){
        const id = TodoItemData.autoId;
        if(params){
            super({
                ...params,
                id,
            });
        } else {
            super({id});
        }
        TodoItemData.autoId = id + 1;
    }
}

const TodoStateRecord = Record({
    todoItems: List(),
    input: ''
});