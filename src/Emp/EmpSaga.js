import { actionTypes } from "./empAction";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getQualificationList() {
    // console.log("action");
    try {
        const res = yield axios.get("https://localhost:7061/api/Employee/GetQual");
        // 'https://localhost:7061/api/Employee/GetQual' 

        // console.log(res, "sagaaaa result");
        const data = res.data;
        yield put({ type: actionTypes.SET_QUALIFICATION_LIST, data });
    } catch (ex) {
        console.log(ex);
    }
}

function* saveEmployeeList(action) {

    // console.log(action.data, "ACTION DATA");
    let eid = parseInt(action.data.employee_id);
    // let data = action.data;
    try {
        if (eid === 0) {
            yield axios
                .post("https://localhost:7061/api/Employee/AddEmployee", action.data)
                .then((res) => {
                    console.log("Data saved successfully");
                    //   toastr.success("Data Saved Successfully");
                })
                .catch((err) => console.log(err, "err"));
            yield* getEmployeeList();
        }
        if (action.data.employee_id > 0) {
            yield axios
                .put("https://localhost:7061/api/Employee/UpdateEmployee", action.data)
                // .then((res) => toastr.success("Data Saved Successfully"))
                .catch((er) => console.log(er, "err"));
            yield* getEmployeeList();
        }
    } catch (err) {
        console.log(err);
    }

}

function* getEmployeeList() {
    try {
        const res = yield axios.get("https://localhost:7061/api/Employee");
        const data = res.data;
        yield put({ type: actionTypes.SET_EMPLOYEE_LIST, data });
    } catch (ex) {
        console.log(ex);
    }
}

function* editEmployee(action) {
    let id = action.data;
    try {
        const res = yield axios.get(
            `https://localhost:7061/api/Employee/GetEmployee?id=${id}`
        );
        // console.log(res, "res saaga");
        const data = res.data;
        yield put({ type: actionTypes.EDIT_DETAILS, data });
    } catch (ex) {
        console.log(ex);
    }
}

function* removeEmployee(action) {
    let id = action.data;
    try {
        const res = yield axios.delete(
            `https://localhost:7061/api/Employee/DeleteEmp?id=${id}`
        );
        const data = res.data;
        console.log(data, 'Removed data');
        // yield put({ type: actionTypes.DELETE_EMP, data });
        yield* getEmployeeList();
    } catch (ex) {
        console.log(ex);
    }
}


function* EmpSaga() {
    yield takeEvery(actionTypes.GET_QUALIFICATION_LIST, getQualificationList);
    yield takeEvery(actionTypes.SAVE_EMP_DETAILS, saveEmployeeList);
    yield takeLatest(actionTypes.GET_EMPLOYEE_LIST, getEmployeeList);
    yield takeEvery(actionTypes.EDIT_DETAILS, editEmployee);
    yield takeEvery(actionTypes.REMOVE_DETAILS, removeEmployee);

}
export default EmpSaga;