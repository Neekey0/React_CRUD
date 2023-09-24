import { actionTypes } from "./Action";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* getTodo() {
    try {

        const res = yield axios.get("https://localhost:7083/getAllTodo");
        const data = res.data;

        console.log(res, "Resss")
        yield put({ type: actionTypes.SET_TODO_VALUES, data })
    }
    catch (er) {
        console.log("error while gettin");
    }
}
function* saveTodo(action) {
    let id = parseInt(action.data.id);
    console.log(id, "idddddddddddd");
    console.log(action, "action")
    try {
        if (id === 0) {
            yield axios
                .post("https://localhost:7083/addTodo", action.data)
                .then((res) => {
                    console.log("saved");
                })
            yield* getTodo();
            // }
        }
        if (action.data.id > 0) {
            yield axios
                .put(`https://localhost:7083/edit/${id}`, action.data)
                .catch((err) => console.log(err, "err"));
            yield* getTodo();
        }
    }
    catch (err) {
        console.log("Errrror occured");
    }
}

function* Saga() {
    // yield takeEvery(actionTypes.SUBMIT_VALUES, saveTodo)
    yield takeEvery(actionTypes.GET_TODO, getTodo);
}

export default Saga;