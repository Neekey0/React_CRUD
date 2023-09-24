import { createStore } from "redux";
import EmpReducer from "./Emp/empReducer";
import createSagaMiddleWare from "redux-saga";
import EmpSaga from "./Emp/EmpSaga";
import { applyMiddleware } from "redux";
import TodoReducer from "./Todo/Reducer";
import Saga from "./Todo/Saga";


const sagaMiddleWare = createSagaMiddleWare();
const store = applyMiddleware(sagaMiddleWare)(createStore)(EmpReducer);

sagaMiddleWare.run(EmpSaga);



// const sagaMiddleWare = createSagaMiddleWare();
// const store = applyMiddleware(sagaMiddleWare)(createStore)(TodoReducer);

// sagaMiddleWare.run(Saga);

export default store;
