import { actionTypes } from "./empAction";

const initialState = {
    EmpDetails: {
        emp_name: "",
        salary: "",
        dob: "",
        gender: "",
        description: "",
        employee_id: 0,
        EmpQualifications: []
    },
    EmpQualifications: {
        q_id: 1,
        // q_Name: "",
        q_Name: "",
        marks: ""
    },
    Emp_Qualifications: {
        q_id: 1,
        q_Name: "",
        marks: ""
    },
    QualificationDetail: [],
    EmpList: [],
    Reset: {
    },
    QualList: [],

    EditQual: {
        q_Name: "",
        marks: ""
    },
    RemoveQual: {

    },
    // Formik: undefined

};



const EmpReducer = (state = initialState, action) => {
    const updateState = Object.assign({}, state);
    let obj, EmpQualifications;
    switch (action.type) {
        case actionTypes.SET_EMP_FORM_VALUES:

            obj = {};
            // console.log(action.data, "action.data")

            obj[action.data.field] = action.data.value;
            // console.log(action.data, "action.data")
            let newObj = Object.assign({}, state.EmpDetails, obj)
            return {
                ...state,
                EmpDetails: newObj
            }

        // case actionTypes.SET_EMP_QUALIFICATION_VALUES:
        //     obj = {};
        //     obj[action.data.field] = action.data.value;
        //     EmpQualifications = Object.assign({}, state.EmpQualifications, obj)
        //     return {
        //         ...state,
        //         EmpQualifications
        //     }



        case actionTypes.SET_EMP_QUALIFICATION_VALUES:
            obj = {};
            obj[action.data.field] = action.data.value;
            // console.log(action.index, "indexxxxxdataaaa");
            //EmpQualifications = Object.assign({}, state.EmpQualifications, obj);

            let qualObjjj = state.QualificationDetail[action.index];
            let newObjjj = Object.assign({}, qualObjjj, obj);
            let qualList = state.QualificationDetail.map(
                (obj, index) => index === action.index ? newObjjj : obj);
            //
            console.log(qualList, ".............")
            return {
                ...state,
                QualificationDetail: qualList
            }


        case actionTypes.SET_QUALIFICATION:
            let Empobj = {};
            Empobj[action.data.field] = action.data.value;
            // console.log(Empobj, "empppppobjjjjjj");
            let Emp_Qualifications = Object.assign({}, state.Emp_Qualifications, Empobj)
            return {
                ...state,
                Emp_Qualifications
            }

        case actionTypes.SAVE_QUALIFICATIONS:
            // console.log(action.data, "Action");
            let index = state.QualificationDetail.findIndex((x) => x.q_id === action.data.q_id);
            // console.log(index, "indexxx");
            if (index === -1) {
                state.QualificationDetail.push(action.data);
                let qobj = Object.assign([], state.QualificationDetail);
                // console.log(qobj, "Value of the Obj");

                return {
                    ...state,
                    QualificationDetail: qobj,
                    EmpQualifications: initialState.EmpQualifications

                };
            } else {
                // console.log(action.data, "Action else if");

                let editObj = Object.assign([], state.QualificationDetail);

                editObj[index] = action.data;
                //console.log(editObj[index], "Value of Edit Obj");

                return {
                    ...state,
                    QualificationDetail: editObj,
                    EmpQualifications: initialState.EmpQualifications
                };
            }

        // return {
        //     ...state,
        //     QualificationDetail: [...state.QualificationDetail, action.data],
        //     EmpQualifications: initialState.EmpQualifications

        // } 


        // case actionTypes.UPDATE_DETAILS:
        //     //let remObj=state.UpdateDetails.findIndex(x => x.GLID == action.data.GLID);
        //     //state.UpdateDetails.splice(remObj, 1);
        //     return {
        //         ...state,
        //         //UpdateDetails: action.data
        //     }  

        // case actionTypes.SAVE_EMP_DETAILS:
        //     action.data.EmpQualifications = state.QualificationDetail;


        //     return {
        //         ...state,

        //         EmpList: [...state.EmpList, action.data],

        //     }
        // case actionTypes.SAVE_EMP_DETAILS:
        //     action.data.EmpQualifications = state.QualificationDetail;

        //     let empIndex = state.EmpList.findIndex((x) => x.id === action.data.id);

        //     console.log(empIndex, "empIndex");
        //     //let empObj;
        //     if (empIndex === -1) {

        //         const maxId = state.EmpList.length === 0 ? 0 : Math.max(...state.EmpList.map(x => parseInt(x.id)));
        //         console.log(maxId, "Max Id");
        //         action.data.id = +maxId + 1
        //         state.EmpList.push(action.data);
        //         // empObj = Object.assign([], state.EmpList, action.data);
        //         // return {
        //         //     ...state,
        //         //     EmpList: eobj,
        //         //     EmpDetails: initialState.EmpDetails

        //         // };
        //     }
        //     else {
        //         // empObj = Object.assign([], state.EmpList);
        //         state.EmpList[empIndex] = action.data;
        //     }
        //     return {
        //         ...state,
        //         //   EmpList: empObj,
        //         EmpDetails: initialState.EmpDetails
        //     };


        case actionTypes.RESET_FORM:
            return {
                ...state,
                EmpDetails: initialState.EmpDetails,
                QualificationDetail: [],
                //EmpQualifications: initialState.EmpQualifications,
                //Emp_Qualifications: initialState.Emp_Qualifications

            }

        case actionTypes.RESET_QUAL:
            return {
                ...state,
                Emp_Qualifications: initialState.Emp_Qualifications
            }

        case actionTypes.EDIT_QUALIFICATIONS:
            // let editEmp = state.QualificationDetail.find((obj) => obj.q_Name === action.data);
            // let editData = Object.assign({}, state.EmpQualifications, editEmp);

            //state.QualificationDetail.findIndex(obj => obj.QualificationDetail === 1);
            //EmpQualifications = Object.assign({}, state.EmpQualifications, obj)
            // console.log(action.data, '........EmpQual.......')


            // obj = {};
            // obj[action.data.field] = action.data.value;
            // let qalObj = state.empQlist.find((x) => x.q_id == action.id);
            // let newobj = Object.assign({}, qalObj, obj);
            // let qalList = state.empQlist.map((obj) =>
            //     obj.q_id == newobj.q_id ? newobj : obj
            // );
            // console.log(qalList, "cloneeeeeeeeeeeeeeeeeeeee");
            // obj = {};
            // obj[action.data.field] = action.data.value;
            // let qualObj = state.QualificationDetail
            // let newObj = Object.assign({},)

            // console.log(obj, "ooooojjjjj");



            return {
                ...state,
                EmpQualifications: action.data,

                // Emp_Qualifications: action.data,
                //EmpQualifications: editData

            }


        /*)   case actionTypes.EDIT_QUALIFICATIONS:
        let editEmp = state.QualificationDetail.find((x) => x.q_Name === action.data);
        let editData = Object.assign({}, state.EmpQualifications, editEmp);

        let updatedQualIndex = state.QualificationDetail.findIndex(obj => obj.QualificationDetail === 1);
        let updatedQual = Object.assign({}, state.EmpQualifications, state.QualificationDetail[updatedQualIndex]);

        console.log(updatedQual, '...EmpQual...');

        return {
            ...state,
            EmpQualifications: editData,
            UpdatedQual: updatedQual
        };

    */



        // let editEmp =state.QualificationDetail.find((x)=>x.q_Name===action.data);
        // let editData = Object.assign({},state.EmpQualifications,editEmp);
        // //state.QualificationDetail.findIndex(obj=>obj.QualificationDetail===1);
        // //EmpQualifications=Object.assign({},state.EmpQualifications,obj)
        // console.log(EmpQualifications,'...EmpQual...')
        // return{
        //     ...state,
        //     EmpQualifications:action.data,
        //     EmpQualifications:editData 



        case actionTypes.REMOVE_QUALIFICATIONS:
            state.QualificationDetail.splice(action.data, 1);
            let newlist = Object.assign([], state.QualificationDetail);

            return {
                //items:state.items.filter((item,index)=> index !==action.data)
                ...state,
                QualificationDetail: newlist

            }
        case actionTypes.REMOVE_DETAILS:
            state.EmpList.splice(action.data, 1);
            let newList = Object.assign([], state.EmpList);
            return {

                ...state,
                EmpList: newList
            }
        case actionTypes.EDIT_DETAILS:
            //console.log("Employeeelistarrray by reducer", action.data);
            return {
                ...state,
                EmpDetails: action.data,
                // QualificationDetail: action.data.EmpQualifications
                QualificationDetail: action.data.emp_Qualifications,


            }
        //for saga set qualification list
        case actionTypes.SET_QUALIFICATION_LIST:
            return {
                ...state,
                QualList: action.data

            }

        case actionTypes.SET_EMPLOYEE_LIST:
            return {
                ...state,
                EmpList: action.data

            }
        // case actionTypes.UPDATE_EMP_QUAL:
        //     return {
        //         ...state,
        //         EmpDetails: action.data,
        //         QualificationDetail: action.data.emp_Qualifications,
        //     }
        default:
            return updateState
    }
}

export default EmpReducer;