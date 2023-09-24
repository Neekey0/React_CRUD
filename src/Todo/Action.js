export const actionTypes = {
    SET_VALUES: "SET_VALUES",
    SUBMIT_VALUES: 'SUBMIT_VALUES',
    GET_TODO: "GET_TODO",
    SET_TODO_VALUES: 'SET_TODO_VALUES'
}

export const SetValues = (data) => {
    return {
        type: actionTypes.SET_VALUES,
        data
    }
}
export const SubmitValues = (data) => {
    return {
        type: actionTypes.SUBMIT_VALUES,
        data
    }
}
export const GetToDo = (data) => {
    return {
        type: actionTypes.GET_TODO,
        data
    }
}