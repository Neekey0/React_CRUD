"use client";
import React from "react";
import { useState } from "react";
import Qualification from "./qualification";
import View from "./treeData";
import InputField from "./inputField";
import {
    setEmployeeQualification,
    setEmployeeDocument,
    addDoclist,
    addQuallist,
    resetForm,
    deleteEmployeedetails,
    deleteEmployeeDocument,
    editQualification,
    editDocument,
    setQualOnEdit,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const table = ({ tableField1, tableField2 }) => {
    const dispatch = useDispatch();
    const [updateState, setUpdateState] = useState(-1);
    const [buttonName, setButtonName] = useState("Edit");

    const EmpQualifications = useSelector((state) => state.empQualification);
    const empDocument = useSelector((state) => state.empDocument);
    const empDocs = useSelector((state) => state.empDocs);
    const empQuaList = useSelector((state) => state.empQuaList);

    const qualList = [
        {
            key: "1",
            value: "SEE",
        },
        {
            key: "2",
            value: "HSEB",
        },
        {
            key: "3",
            value: "Bachelors",
        },
    ];

    const documentList = [
        {
            key: "1",
            value: "Citizenship",
        },
        {
            key: "2",
            value: "Transcript",
        },
        {
            key: "3",
            value: "Character",
        },
    ];
    function handleQualificationChange(e) {
        let keyValue = {};
        keyValue["field"] = e.target.name;
        keyValue["value"] = e.target.value;
        dispatch(setEmployeeQualification(keyValue));
    }

    function handleDocumentChange(e) {
        let keyValue = {};
        keyValue["field"] = e.target.name;
        keyValue["value"] = e.target.value;
        dispatch(setEmployeeDocument(keyValue));
    }

    function handleAddList(e) {
        e.preventDefault();
        dispatch(addDoclist(empDocument));
    }

    function handleAddQual(e) {
        e.preventDefault();
        dispatch(addQuallist(EmpQualifications));
    }

    function handleReset(e) {
        e.preventDefault();
        dispatch(resetForm());
    }

    const onEditQual = (id, e) => {
        e.preventDefault();
        setUpdateState(id);
        setButtonName("Update");
    };

    const onEditDocs = (id, e) => {
        e.preventDefault();
        dispatch(editDocument(id));
    };

    const onDelete = (id, e) => {
        e.preventDefault();
        dispatch(deleteEmployeedetails(id));
    };

    const onDeleteDocs = (id, e) => {
        e.preventDefault();
        dispatch(deleteEmployeeDocument(id));
    };

    function handleInputQualificationForm(e, item, index) {
        let keyValue = {};
        keyValue["field"] = e.target.name;
        keyValue["value"] = e.target.value;
        dispatch(setQualOnEdit({ keyValue, q_id: item.q_id, index }));
    }

    function handleQualonEdit(id, e) {
        e.preventDefault();
        dispatch(editQualification(id));
        setUpdateState(-1);
        setButtonName("Edit");
    }
    function EditQual(props) {
        // console.log(props, "props");
        return (
            <>
                <tr>
                    <td className="table-data">
                        <Qualification
                            options={qualList}
                            Value_Field={props.item?.q_id}
                            handleChange={(e) => {
                                handleInputQualificationForm(e, props.item, props.index);
                            }}
                            Name_field="q_id"
                        ></Qualification>
                    </td>
                    <td className="table-data">
                        <InputField
                            // Label_Name={"Marks"}
                            type="number"
                            NameOfField="Marks"
                            ValueOfField={props.item?.Marks}
                            handleEventChange={(e) =>
                                handleInputQualificationForm(e, props.item, props.index)
                            }
                        ></InputField>
                    </td>
                    <td>
                        <button
                            className="add-btn btn"
                            onClick={(e) => {
                                handleQualonEdit(props.item.q_id, e);
                                handleReset(e);
                            }}
                        >
                            {buttonName}
                        </button>
                        &nbsp;
                        <button
                            className="add-btn btn"
                            onClick={(e) => onDelete(props.item.q_id, e)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </>
        );
    }

    return (
        <div className="inputField">
            <div>
                <table className="table-heading">
                    <thead>
                        <tr>
                            <th className="table-heading">{tableField1}</th>
                            <th className="table-heading">{tableField2}</th>
                            <th className="table-heading">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <Qualification
                                    options={
                                        tableField1 == "Qualification" ? qualList : documentList
                                    }
                                    Name_field={tableField1 == "Qualification" ? "q_id" : "d_id"}
                                    Value_Field={
                                        tableField1 == "Qualification"
                                            ? EmpQualifications?.q_id
                                            : empDocument?.d_id
                                    }
                                    handleChange={(e) =>
                                        tableField1 == "Qualification"
                                            ? handleQualificationChange(e)
                                            : handleDocumentChange(e)
                                    }
                                ></Qualification>
                            </th>
                            <th>
                                <InputField
                                    type={tableField2 == "Marks" ? "number" : "file"}
                                    NameOfField={tableField2}
                                    ValueOfField={
                                        tableField2 == "Marks"
                                            ? EmpQualifications?.Marks
                                            : empDocument?.File
                                    }
                                    handleEventChange={
                                        tableField2 == "Marks"
                                            ? handleQualificationChange
                                            : handleDocumentChange
                                    }
                                ></InputField>
                            </th>
                            <th>
                                <button
                                    type="submit"
                                    className="add-btn btn"
                                    onClick={(e) => {
                                        tableField1 == "Qualification"
                                            ? handleAddQual(e)
                                            : handleAddList(e);
                                        handleReset(e);
                                    }}
                                >
                                    Add
                                </button>
                            </th>
                        </tr>
                    </tbody>
                    <tbody>
                        {tableField1 == "Qualification"
                            ? empQuaList.map((item, index) => {
                                // let q_index = qualList.findIndex((x) => x.key == item.q_id);
                                return updateState === item.q_id ? (
                                    <EditQual item={item} index={index} />
                                ) : (
                                    <tr key={item.q_id}>
                                        <td className="table-data">{qualList[index].value}</td>
                                        <td className="table-data">{item.Marks}</td>
                                        <td>
                                            <button
                                                className="add-btn btn"
                                                onClick={(e) => {




                                                    onEditQual(item.q_id, e);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="add-btn btn"
                                                onClick={(e) => onDelete(item.q_id, e)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                            : empDocs.map((item) => {
                                let index = documentList.findIndex((x) => x.key == item.d_id);
                                return (
                                    <tr key={item.d_id}>
                                        <td className="table-data">
                                            {documentList[index].value}
                                        </td>
                                        <td className="table-data">{item.File}</td>
                                        <td>
                                            <button
                                                className="add-btn btn"
                                                onClick={(e) => {
                                                    onEditDocs(item.q_id, e);
                                                    onDeleteDocs(item.d_id, e);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="add-btn btn"
                                                onClick={(e) => onDeleteDocs(item.d_id, e)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default table;




case actionTypes.SET_QUALIFICATION_EDIT:
const { index, keyValue } = action.data;
obj = {};
obj[keyValue.field] = keyValue.value;
let qalObj = state.empQuaList.find(
    (x, index) => index == action.data.index
);
let newobj = Object.assign({}, qalObj, obj);
let qalList = state.empQuaList.map((qObj, index) =>
    index == action.data.index ? newobj : qObj
);
// const qalList = state.empQuaList.map((obj) =>
//   obj.q_id === action.id ? { ...obj, [field]: value } : obj
// );
console.log(qalObj, "++++++++++++++++++++++++");
return {
    ...state,
    empQuaList: qalList,
};





export const setQualOnEdit = (data) => {
    return {
        type: actionTypes.SET_QUALIFICATION_EDIT,
        data,
    };
};






