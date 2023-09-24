export const actionTypes =
{
    SET_EMP_FORM_VALUES: "SET_EMP_FORM_VALUES",
    SET_EMP_QUALIFICATION_VALUES: "SET_EMP_QUALIFICATION_VALUES",
    SAVE_QUALIFICATIONS: "SAVE_QUALIFICATIONS",
    SAVE_EMP_DETAILS: "SAVE_EMP_DETAILS",
    RESET_FORM: "RESET_FORM",
    EDIT_QUALIFICATIONS: 'EDIT_QUALIFICATIONS',
    REMOVE_QUALIFICATIONS: 'REMOVE_QUALIFICATIONS',

    RESET_QUAL: "RESET_QUAL",

    REMOVE_DETAILS: 'REMOVE_DETAILS',
    EDIT_DETAILS: 'EDIT_DETAILS',

    SET_QUALIFICATION: 'SET_QUALIFICATION',

    GET_QUALIFICATION_LIST: 'GET_QUALIFICATION_LIST',
    SET_QUALIFICATION_LIST: 'SET_QUALIFICATION_LIST',

    GET_EMPLOYEE_LIST: 'GET_EMPLOYEE_LIST',
    SET_EMPLOYEE_LIST: 'SET_EMPLOYEE_LIST',

    UPDATE_EMP_QUAL: 'UPDATE_EMP_QUAL'


}



export const GetQualificationList = (data) => {
    return {
        type: actionTypes.GET_QUALIFICATION_LIST,
        data
    }
}



export const GetEmployeeList = (data) => {
    return {
        type: actionTypes.GET_EMPLOYEE_LIST,
        data
    }
}

export const SetEmployeeList = (data) => {
    return {
        type: actionTypes.SET_EMPLOYEE_LIST,
        data
    }

}
export const SetEmpFormValues = (data) => {
    return {
        type: actionTypes.SET_EMP_FORM_VALUES,
        data
    }
}
export const SetEmpQualificationValues = (data, index) => {
    return {
        type: actionTypes.SET_EMP_QUALIFICATION_VALUES,
        data,
        index
    }
}


export const SetQualification = (data) => {
    return {
        type: actionTypes.SET_QUALIFICATION,
        data
    }
}

export const SaveQualifications = (data) => {
    return {
        type: actionTypes.SAVE_QUALIFICATIONS,
        data
    }
}

export const SaveEmpDetail = (data) => {
    return {
        type: actionTypes.SAVE_EMP_DETAILS,
        data
    }
}

export const ResetForm = () => {
    return {
        type: actionTypes.RESET_FORM
    }
}

export const ResetQualification = () => {
    return {
        type: actionTypes.RESET_QUAL
    }
}

export const EditQualification = (data) => {
    return {
        type: actionTypes.EDIT_QUALIFICATIONS,
        data
    }
}

export const RemoveQualification = (data) => {
    return {
        type: actionTypes.REMOVE_QUALIFICATIONS,
        data
    }
}

export const RemoveDetails = (data) => {
    return {
        type: actionTypes.REMOVE_DETAILS,
        data
    }
}

export const EditDetails = (data) => {
    return {
        type: actionTypes.EDIT_DETAILS,
        data
    }
}

// export const UpdateDetails = (data) => {
//     return {
//         type: actionTypes.UPDATE_EMP_QUAL,
//         data
//     }
// }
// export const UpdateDetails=(data)=>{
//     return{
//         type:actionTypes.UPDATE_DETAILS,
//         data
//     }
// }