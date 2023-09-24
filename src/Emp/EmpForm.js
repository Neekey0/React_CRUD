import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//import { Formik, Field, Form, ErrorMessage } from 'formik';
//import { toastr } from "react-redux-toastr";

//import * as Yup from "yup";
import { SetEmpFormValues, SetEmpQualificationValues, SaveQualifications, SaveEmpDetail, ResetForm, EditQualification, RemoveQualification, RemoveDetails, EditDetails, GetQualificationList, GetEmployeeList, SaveEmployeeList, SetEmployeeList, SetQualification, ResetQualification } from './empAction';
import InputComponent from '../component/InputComponent';
import TextareaComponent from '../component/TextareaComponent';
import SelectComponent from '../component/SelectComponent';
import Display from './Display';

function EmpForm() {

    // const options = ["Select one", "S.L.C", "H.S.E.B.", "Bachelors", "Masters"];


    const formik = useFormik({
        initialValues: {
            emp_name: '',
            gender: '',
            salary: '',

            dob: '',
            description: '',
            q_Name: '',
            marks: '',
        },

        validationSchema: Yup.object({
            emp_name: Yup.string()
                .max(15, "[Must be 15 characters or less]")
                .required("[Name is required]"),

            gender: Yup.string()
                .oneOf(['male', 'female', 'other'], 'Invalid gender option').required('Gender is required')
                //.oneOf(['male', 'female', 'others'])
                .defined(),
            dob: Yup.date()
                .required('Required')
                .default(() => new Date()),
            description: Yup.string()
                .max(50, "[Desctiption must be 50 characters or less]")
                .required('[Description required]'),
            empSalary: Yup.number()
                .required('[Fill out the salary]')
                .positive("[Salary must be positive]"),
            q_Name: Yup.string()
                .required('[Required q_Name]'),

            //.required('Required q_Name ').oneOf(q_Name),
            marks: Yup.number()
                .required('Fill the marks value'),
        }),
        onSubmit: (values, action) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(SaveEmpDetail(values));
            dispatch(ResetForm());
            //setIsFormSubmitted(true);
            action.resetForm();
        },
    });

    const dispatch = useDispatch();
    const [buttonName, setButtonName] = useState("Add");
    // const [edit, setEdit] = useState("Update");
    const [updateState, setUpdateState] = useState(-1);

    //const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // const empData = useSelector((state) => state.EmpDetails);

    //console.log(empData, 'xxxxxxzzzzzzzzzzzz');
    // const formik = useFormik({

    // const initialValues = {
    //     empName: "",
    //     salary: null,
    //     dob: null,
    //     description: "",
    //     gender: ""
    // }

    // // function validate(values) {
    // //     let errors = {};
    // //     if (initialValues.empName.length < 15) {
    // //         errors.empName = "Name  must be  less than 15";
    // //     }
    // //     if (initialValues.dob || initialValues.dob < 18) {
    // //         errors.dob = "Minimun age is 18";
    // //     }
    // //     if (initialValues.description == null) {
    // //         errors.description = "Write something";
    // //     }
    // //     return errors;
    // // }


    //     validationSchema: validation,
    //     onSubmit: (values) => {
    //         console.log(values, 'zzzzzzzzzzzzzzzzzzzzzz');
    //         console.log("........................val..............", values);
    //     }
    //     //console.log(initialValues, "initial values extract");
    //     // const validate = (values) => {
    //     //     let errors = {};
    //     //     if (!values.empName) {
    //     //         errors.empName = 'Required';
    //     //     } else if (values.empName.length > 15) {
    //     //         errors.empName = 'Must be 15 characters or less';
    //     //     }
    //     //     return errors;

    //     // };
    //     // 





    const EmpDetails = useSelector(
        (state) => state.EmpDetails
    )


    const EmpQualifications = useSelector(
        (state) => state.EmpQualifications
    )
    //console.log(EmpQualifications, "EmpQualifications 000000000000000000000000000000000");

    const Emp_Qualifications = useSelector(
        (state) => state.Emp_Qualifications
    )


    const QualificationDetail = useSelector(
        (state) => state.QualificationDetail
    )

    // console.log(QualificationDetail, "Qualifyyyyyyy");
    //console.log(QualificationDetail, 'q_Name')

    // const addDetail =useSelector(
    //     (state)=>state.Detail
    // )

    // const EmpList = useSelector(
    //     (state) => state.EmpList
    // )

    // console.log(EmpList, "EmpListArray");

    // const ResetForm =useSelector(
    //     (state)=>state.ResetForm
    // )


    const handleInputChangeForm = (e) => {

        let keyValue = {};
        keyValue['field'] = e.target.name;
        keyValue['value'] = e.target.value;
        console.log(keyValue, "page");
        dispatch(SetEmpFormValues(keyValue));
    }

    const handleInputChangeQualificationForm = (e, index) => {
        let keyValue = {};
        keyValue['field'] = e.target.name;
        keyValue['value'] = e.target.value;
        //console.log(keyValue, "keyvaluesssssss");
        dispatch(SetEmpQualificationValues(keyValue, index));
    }
    // console.log(EmpQualifications, "EmpQualifications");


    const handleQualification = (e) => {
        let keyValue = {};
        keyValue['field'] = e.target.name;
        keyValue['value'] = e.target.value;
        dispatch(SetQualification(keyValue));
    }


    const addQualification = (e) => {
        // console.log("button clicked");

        //dispatch(SaveQualifications(EmpQualifications));
        dispatch(SaveQualifications(Emp_Qualifications));

    }

    // const update=(data)=>{
    //     dispatch(UpdateDetails(data));
    // }
    const handleSubmit = () => {

        // if (EmpDetails.id == "") {
        //     EmpDetails.id = EmpList.length;
        // }
        //const empDetailsId = useId();

        // var finalObj = {
        //     empName: empData.empName
        // };
        // const { name } = finalObj;
        // if (
        //     name == ""
        // ) {
        //     // toastr.error("Please fill all fields");
        // } else {
        //     dispatch(SaveEmpDetail(finalObj));

        // }

        EmpDetails.emp_Qualifications = QualificationDetail;
        // console.log(EmpDetails, "EMpdddddddddddddddddddddddddddddddd");

        dispatch(SaveEmpDetail(EmpDetails));
        dispatch(ResetForm());
        // dispatch(SetEmployeeList(EmpDetails));
        // setIsFormSubmitted(true);


    }
    const reset = (e) => {
        // formik.resetForm();
        // setIsFormSubmitted(false);

        //setIsFormSubmitted(false);
        dispatch(ResetForm());
    }
    const resetQual = (e) => {
        dispatch(ResetQualification());
    }

    const handleEdit = (index) => {
        let obj = QualificationDetail[index];

        console.log(obj, "stringobjjjjjjjjjj");
        dispatch(EditQualification(obj));
        // dispatch(SaveQualifications);
        // setButtonName("Update");
    }

    const handleRemove = (index) => {
        //console.log(index, "indexdlt");
        dispatch(RemoveQualification(index));
    }
    //console.log(QualificationDetail, "QualificationDetail");
    // const removeDetails = (index) => {
    //     //console.log(index, "employee removed");
    //     dispatch(RemoveDetails(index));
    // }
    // const editDetails = (index) => {
    //     let empObj = EmpList[index];
    //     //console.log(empObj, "Employeeeeeobjectt");
    //     dispatch(EditDetails(empObj));
    // }


    useEffect(() => {
        dispatch(GetQualificationList());
        dispatch(GetEmployeeList());
        // dispatch(SaveEmployeeList());
    }, []);

    const Qual = useSelector(
        (state) => state.QualList
    )
    console.log(Qual, "Quallllllllll");

    return (

        <>
            {/* <div className="flex flex-wrap"> */}
            {/* <div className='flex-initial w-3/5'>
                    <p className="font-bold text-3xl text-center text-black px-40 ">Employee Details</p>
                    <table  >
                        <thead className='border-black  border-2 my-4 mx-2 bg-slate-600 text-white'>
                            <tr>
                                <th className='border border-y-2 p-2'> Name</th>
                                <th className='border border-y-2 p-2'>Gender</th>
                                <th className='border border-y-2 p-2'>D.O.B.</th>
                                <th className='border border-y-2 p-2'>Salary</th>
                                <th className='border border-y-2 p-2'>Description</th>
                                <th className='border border-y-2 p-2'>q_Name</th>
                                <th className='border border-y-2 p-2'>Marks</th>
                                <th className='border border-y-2 p-2'>Action</th>

                            </tr>
                        </thead>

                        <tbody className={true ? 'bg-gray-200  center' : ''}>
                            {EmpList?.map((x, index) => (
                                <tr className='border border-black text-center' key={index}>
                                    <td>{x.empName}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.dob}</td>
                                    <td>{x.empSalary}</td>
                                    <td>{x.description}</td>

                                    <td>
                                        {x.EmpQualifications.map(xy => (
                                            <div>
                                                <span>{xy.q_Name}</span>

                                            </div>
                                        ))}
                                    </td>


                                    <td>
                                        {x.EmpQualifications.map(xy => (
                                            <div>
                                                <span>{xy.marks}</span>
                                            </div>
                                        ))}
                                    </td>
                                    <td>

                                        <button className='border border-green-800 border-spacing-4 rounded-md text-lg bg-green-700 mx-2 p-2 text-white' onClick={() => editDetails(index)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg></button>
                                        <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={() => removeDetails(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                        </button>

                                    </td>

                                </tr>
                            ))}
                        </tbody>



                    </table>
                </div> */}

            {/* <form onSubmit={formik.handleSubmit}> */}

            {/* <div > */}
            <div>

                <p className="font-bold text-2xl  text-blue-900 px-30 pb-5 dark:text-white">Employee Form</p>

                <InputComponent
                    Label={"Name:"}
                    type={"text"}
                    name={"emp_name"}
                    placeholder={"Type Name..."}
                    values={EmpDetails.emp_name}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }
                    }
                >

                    {/* <ErrorMessage name="empName" /> */}
                    {/* 
                    {formik.touched.empName && formik.errors.empName ? (
                        <div className="errors text-red-500 font-bold">
                            {formik.errors.empName}
                        </div>
                    ) : null} */}

                </InputComponent>

                <br />
                <InputComponent
                    Label={"Salary:"}
                    type={"number"}
                    name={"salary"}
                    placeholder={"Type Salary..."}
                    //onBlur={formik.handleBlur}
                    // values={formik.values.empSalary}
                    values={EmpDetails.salary}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }}>

                    {formik.touched.salary && formik.errors.salary ? (
                        <div className="errors text-red-500 font-bold">
                            {formik.errors.salary}
                        </div>
                    ) : null}

                </InputComponent>
                <br />
                <label className='text-xl px-3 font-bold' htmlFor=""> Gender: </label>
                <InputComponent
                    // Label={"Gender:"}
                    Label={"Male"}
                    type={"radio"}
                    name={"gender"}
                    values={"Male"}
                    checked={EmpDetails.gender === "Male"}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }}>


                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="errors text-red-500 font-bold">
                            {formik.errors.gender}
                        </div>
                    ) : null}

                </InputComponent>
                <InputComponent
                    Label={"Female"}
                    type={"radio"}
                    name={"gender"}
                    values={"Female"}
                    checked={EmpDetails.gender === "Female"}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }}>


                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="errors text-red-500 font-bold">
                            {formik.errors.gender}
                        </div>
                    ) : null}

                </InputComponent>

                <InputComponent
                    Label={"Others"}
                    type={"radio"}
                    name={"gender"}
                    checked={EmpDetails.gender === "Others"}
                    values={"Others"}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }}

                />

                {formik.touched.gender && formik.errors.gender ? (
                    <div className="errors text-red-500 font-bold">
                        {formik.errors.gender}
                    </div>
                ) : null}
                <br />



                <InputComponent
                    Label={"Date of Birth:"}
                    type={"date"}
                    name={"dob"}
                    // values={formik.values.dob}
                    values={EmpDetails.dob}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }}>


                    {formik.touched.dob && formik.errors.dob ? (
                        <div className="errors text-red-500 font-bold">
                            {formik.errors.dob}
                        </div>
                    ) : null}

                </InputComponent>
                <br />
                {/* 
                <TextareaComponent
                    label={"Description:"}
                    type={"text"}
                    name={"description"}
                    placeholder={"Type Something..."}
                    // values={formik.values.description}
                    values={EmpDetails.description}
                    rows={4}
                    cols={40}
                    handleChange={(e) => {
                        formik.handleChange(e);
                        handleInputChangeForm(e);
                    }}

                />

                {formik.touched.description && formik.errors.description ? (
                    <div className="errors text-red-500 font-bold">
                        {formik.errors.description}
                    </div>
                ) : null} */}

                <div>
                    <table className="table-auto border-indigo-600">
                        <thead>
                            <tr>
                                <th className=" border-2 border-black px-4 py-2">Qualifications</th>
                                <th className="border-2 border-black px-4 py-2">Marks</th>
                                <th className=" border-2 border-black px-4 py-2">Actions</th>
                            </tr>
                        </thead>

                        {/* For dropdown */}

                        <tbody>

                            <tr>
                                <th>
                                    <SelectComponent
                                        // label={"Qualification:"}
                                        name={"q_id"}
                                        options={Qual}
                                        value={Emp_Qualifications.q_id}
                                        // handleChange={handleInputChangeQualificationForm}
                                        handleChange={handleQualification}
                                        placeholder={"---"}
                                    >
                                    </SelectComponent>
                                </th>
                                <th>
                                    <InputComponent
                                        // Label={"Marks:"}
                                        type={"number"}
                                        name={"marks"}
                                        values={Emp_Qualifications.marks}
                                        // handleChange={handleInputChangeQualificationForm}
                                        handleChange={handleQualification}
                                    >
                                    </InputComponent>
                                </th>
                                <th>
                                    <button className=' border border-blue-800 bg-blue-500 border-spacing-4 rounded-md text-sm hover:blue-700 mx-2 p-2 hover:text-white dark:bg-slate-700'
                                        onClick={(e) => {
                                            addQualification(e);
                                            resetQual(e);
                                        }
                                        }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg></button>
                                    {/* <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={(index) => handleEdit()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                    </svg></button>
                                    <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={(index) => handleRemove()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    </svg></button> */}

                                </th>
                            </tr>

                            {/* Values */}

                            {QualificationDetail?.map((x, index) => {
                                let qname = Qual.findIndex((item) => item.q_id === x.q_id);
                                return (
                                    // qname ? (
                                    <tr key={index}>
                                        <td className="border border-black px-4 py-2" >
                                            {/* {Qual[qname].q_Name} */}
                                            <SelectComponent
                                                // label={"Qualification:"}
                                                name={"q_id"}
                                                options={Qual}
                                                value={x.q_id}
                                                handleChange={(e) => handleInputChangeQualificationForm(e, index)}
                                            // disabled={true}
                                            >
                                            </SelectComponent>
                                        </td>
                                        <td className="border border-black px-4 py-2">
                                            {/* {x.marks} */}
                                            <InputComponent
                                                // Label={"Marks:"}
                                                type={"number"}
                                                name={"marks"}
                                                values={x.marks}
                                                handleChange={(e) => {
                                                    formik.handleChange(e);
                                                    handleInputChangeQualificationForm(e, index);
                                                }}>
                                            </InputComponent>
                                        </td>
                                        <td className="border border-black px-4 py-2">
                                            {/* <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={() => handleEdit(index)}>Edit</button> */}
                                            <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white dark:bg-slate-700' onClick={() => handleRemove(index)}>Delete</button>
                                        </td>
                                    </tr>
                                    // ) : (
                                    //     <tr key={index}>
                                    //         <td className="border border-black px-4 py-2">{Qual[qname].q_Name}</td>
                                    //         <td className="border border-black px-4 py-2">{x.marks}</td>
                                    //         <td className="border border-black px-4 py-2">
                                    //             <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={() => handleEdit(index)}>Edit</button>
                                    //             <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={() => handleRemove(index)}>Delete</button>
                                    //         </td>
                                    //     </tr>)

                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>

                {/*


                <div>
                    <div className="container mx-auto">
                        <table className="table-auto border-indigo-600">
                            <thead>
                                <tr>
                                    <th className=" border-2 border-black px-4 py-2">Qualifications</th>
                                    <th className="border-2 border-black px-4 py-2">Marks</th>
                                    <th className=" border-2 border-black px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <SelectComponent
                                            // label={"Qualification:"}
                                            name={"q_id"}
                                            options={Qual}
                                            value={EmpQualifications.q_id}
                                            handleChange={handleInputChangeQualificationForm}
                                        >
                                        </SelectComponent>
                                    </th>
                                    <th>
                                        <InputComponent
                                            // Label={"Marks:"}
                                            type={"number"}
                                            name={"marks"}
                                            values={EmpQualifications.marks}
                                            handleChange={(e) => {
                                                formik.handleChange(e);
                                                handleInputChangeQualificationForm(e);
                                            }}>
                                        </InputComponent>
                                    </th>
                                    <th>
                                        <button className=' border border-blue-800 bg-blue-500 border-spacing-4 rounded-md text-sm hover:blue-700 mx-2 p-2 hover:text-white'
                                            onClick={(e) => addQualification(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg></button>
                                        <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={(index) => handleEdit()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                        </svg></button>
                                        <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={(index) => handleRemove()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                        </svg></button>

                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                {QualificationDetail?.map((x, index) => {
                                    let qname = Qual.findIndex((item) => item.q_id == x.q_id);
                                    return (
                                        <tr key={index}>
                                            <td className="border border-black px-4 py-2">

                                            </td>
                                            <td className="border border-black px-4 py-2">
                                                {Qual[qname].q_Name}
                                            </td>
                                            <td className="border border-black px-4 py-2">

                                            </td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Previous Table */}
                {/* <tr>
                                    {QualificationDetail?.map((x, index) => {
                                        let qname = Qual.findIndex((item) => item.q_id == x.q_id);
                                        return (
                                            <tr key={index}>

                                                <td className="border border-black px-4 py-2">

                                                    <SelectComponent
                                                        // label={"Qualification:"}
                                                        name={"q_id"}
                                                        options={Qual}
                                                        value={EmpQualifications.q_id}
                                                        handleChange={handleInputChangeQualificationForm}
                                                    >
                                                    </SelectComponent>

                                                </td>
                                                <td>
                                                    <InputComponent
                                                        // Label={"Marks:"}
                                                        type={"number"}
                                                        name={"marks"}
                                                        values={EmpQualifications.marks}
                                                        handleChange={(e) => {
                                                            formik.handleChange(e);
                                                            handleInputChangeQualificationForm(e);
                                                        }}>


                                                    </InputComponent>
                                                </td>
                                                <td>
                                                    <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={() => handleEdit(index)}>Edit</button>
                                                    <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={() => handleRemove(index)}>Delete</button>
                                                </td>

                                            </tr>
                                        );
                                    })}
                                </tr> */}


                {/* 
                    <button className=' border border-green-800 border-spacing-4 rounded-md text-sm hover:bg-green-700 mx-2 p-2 hover:text-white'
                        onClick={(e) => addQualification(e)}>{buttonName}</button> */}

                {/* 
                    <div>
                        <table className="border-collapse border border-slate-500  rounded-md mx-4 my-4 w-3/5">
                            <thead>
                                <tr>
                                    <th className='border-2 border-slate-600 text-bold p-2 '>I.D.</th>
                                    <th className='border-2 border-slate-600 text-bold p-2 '>Qualification</th>
                                    <th className='border-2 border-slate-600  text-bold p-2'>Marks</th>
                                    <th className='border-2 border-slate-600  text-bold p-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {QualificationDetail?.map((x, index) => {
                                    
                                    let qname = Qual.findIndex((item) => item.q_id == x.q_id);
                                    return (
                                        <tr key={index}>
                                            <td className='border border-slate-600 p-2'>{x.q_id}</td>

                                            <td className='border border-slate-600 p-2 '>{Qual[qname].q_Name}</td>

                                            <td className='border border-slate-600 p-2'>{x.marks}</td>
                                            <td>
                                                <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={() => handleEdit(index)}>Edit</button>
                                                <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={() => handleRemove(index)}>Delete</button>
                                            </td>

                                        </tr>
                                    );
                                })}
                            </tbody>

                        </table>
                    </div> 


            </div >
*/}
                <br />

                <button
                    className='border bg-blue-700 border-blue-900 rounded-md  mx-2 px-4 py-2 center hover:bg-blue-950 text-white text-lg dark:bg-slate-800'
                    onClick={(e) => {
                        //formik.handleSubmit(e);
                        handleSubmit(e);
                        reset(e);
                        // formik.resetForm(e);
                    }
                    }
                // onSubmit={formik.handleSubmit}
                // type="submit"
                > Submit </button >
                {/* {isFormSubmitted && <button type="button" onClick={reset}>Reset</button>} */}
                {/* } */}
            </div >

            {/* </div > */}
            {/* </div > */}

        </>
    )
}

export default EmpForm

