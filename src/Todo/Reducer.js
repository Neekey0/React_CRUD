import { actionTypes } from "./Action"

const initialState = {
    Todo: {
        id: "",
        name: "",
        isComplete: ""
    },
    TodoList: []
}

const TodoReducer = (state = initialState, action) => {
    let updateState = Object.assign({}, state);

    switch (action.type) {
        case actionTypes.SET_VALUES:
            let obj = {};
            obj[action.data.field] = action.data.value;
            let newObj = Object.assign({}, state.Todo, obj);
            console.log(newObj, "newObj");
            return {
                ...state,
                Todo: newObj,
            }


        // case actionTypes.SUBMIT_VALUES:
        //     console.log(action.data, "dataaaaaaaaaaaaaaaaaaaa")
        //     return {
        //         ...state,
        //         TodoList: [...state.TodoList, action.data],
        //         Todo: action.data
        //     }

        case actionTypes.SET_TODO_VALUES:
            return {
                ...state,
                TodoList: action.data,
            }
        default:
            return updateState;
    }
}
export default TodoReducer;