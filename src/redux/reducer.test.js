//import React from 'react';
//import { ReactDOM } from 'react-dom';
import {operationsReducer} from './operations';
import {Todo} from './Todo';


it ('Количество задач увеличится', () => {

    let action = Todo ('Test pass');

    let state ={
        post: [
            {id: 1, todo: 'Buy Laptop', completed: false},
            {id: 2, todo: 'Master Redux', completed: false},
            {id: 3, todo: 'Watering Plants', completed: true},
        ],
    };

    let newState = operationsReducer(state, action);

    expect (newState.post.length).toBe(4);
})