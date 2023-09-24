import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import { toastr } from "react-redux-toastr";

import * as Yup from "yup";
import { SetEmpFormValues, SetEmpQualificationValues, SaveQualifications, SaveEmpDetail, ResetForm, EditQualification, RemoveQualification, RemoveDetails, EditDetails } from './empAction';

function EmpForm() {
    const dispatch = useDispatch();
    const [buttonName, setButtonName] = useState("Add");


    const empData = useSelector((state) => state.EmpDetails);

    console.log(empData, 'xxxxxxzzzzzzzzzzzz');
    const formik = useFormik({

        initialValues: empData,
        validationSchema: validation,
        onSubmit: (values) => {
            console.log(values, 'zzzzzzzzzzzzzzzzzzzzzz');
            console.log("........................val..............", values);
        }
        //console.log(initialValues, "initial values extract");
        // const validate = (values) => {
        //     let errors = {};
        //     if (!values.empName) {
        //         errors.empName = 'Required';
        //     } else if (values.empName.length > 15) {
        //         errors.empName = 'Must be 15 characters or less';
        //     }
        //     return errors;

        // };
        // //Validation  schemna using YUP
        // const validationSchema = Yup.object({
        //     empName: Yup.string().required("Required !!!"),

        //     //.max(10, 'Name must be 1o characters or  less')

        // });
        // const formik = useFormik({
        //     initialValues,
        //     validationSchema,
    });





    const EmpDetails = useSelector(
        (state) => state.EmpDetails
    )

    // console.log(EmpDetails, "EmpDetails");

    const EmpQualifications = useSelector(
        (state) => state.EmpQualifications
    )

    const QualificationDetail = useSelector(
        (state) => state.QualificationDetail
    )
    //console.log(QualificationDetail, 'Qualification')

    // const addDetail =useSelector(
    //     (state)=>state.Detail
    // )

    const EmpList = useSelector(
        (state) => state.EmpList
    )

    console.log(EmpList, "EmpListArray");

    // const ResetForm =useSelector(
    //     (state)=>state.ResetForm
    // )


    const handleInputChangeForm = (e) => {
        let keyValue = {};
        keyValue['field'] = e.target.name;
        keyValue['value'] = e.target.value;
        //console.log(keyValue, "page");
        dispatch(SetEmpFormValues(keyValue));
    }

    const handleInputChangeQualificationForm = (e) => {
        let keyValue = {};
        keyValue['field'] = e.target.name;
        keyValue['value'] = e.target.value;
        dispatch(SetEmpQualificationValues(keyValue));
    }
    // console.log(EmpQualifications, "EmpQualifications");


    const addQualification = (e) => {
        //console.log(EmpQualifications, "EmpQualifications");

        dispatch(SaveQualifications(EmpQualifications));
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

        dispatch(SaveEmpDetail(EmpDetails));
        dispatch(ResetForm());

    }
    const reset = () => {
        dispatch(ResetForm());
    }

    const handleEdit = (index) => {
        let obj = QualificationDetail[index];
        //console.log(obj, "string");
        dispatch(EditQualification(obj));
        setButtonName("Update");
    }

    const handleRemove = (index) => {
        //console.log(index, "indexdlt");
        dispatch(RemoveQualification(index));
    }

    const removeDetails = (index) => {
        //console.log(index, "employee removed");
        dispatch(RemoveDetails(index));
    }
    const editDetails = (index) => {
        let empObj = EmpList[index];
        //console.log(empObj, "Employeeeeeobjectt");
        dispatch(EditDetails(empObj));
    }


    return (
        <>
            <div className="flex flex-wrap">
                <div className='flex-initial w-3/5'>
                    <p className="font-bold text-3xl text-center text-black px-40 ">Employee Details</p>
                    <table  >
                        <thead className='border-black  border-2 my-4 mx-2 bg-slate-600 text-white'>
                            <tr>
                                <th className='border border-y-2 p-2'> Name</th>
                                <th className='border border-y-2 p-2'>Gender</th>
                                <th className='border border-y-2 p-2'>D.O.B.</th>
                                <th className='border border-y-2 p-2'>Salary</th>
                                <th className='border border-y-2 p-2'>Description</th>
                                <th className='border border-y-2 p-2'>Qualification</th>
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
                                    {/* <td>
                                    {x.EmpQualifications.map(xy=>(
                                        <span>{xy.qualification}</span>
                                
                                    ))}
                                </td> */}

                                    <td>
                                        {x.EmpQualifications.map(xy => (
                                            <div>
                                                <span>{xy.qualification}</span>
                                                {/* <p>{xy.marks}</p> */}
                                                {/* <div>
                                         <span>{xy.marks}</span>
                                        </div> */}
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
                                        {/* <button className='bg-red-500 border' type='submit'>Delete</button> */}

                                    </td>




                                    {/* <td>{x.qualification}</td>
                                <td>{x.marks}</td> */}
                                </tr>
                            ))}
                        </tbody>
                        {/* 
                        {QualificationDetail?.map((d, index) => (
                            <tr key={index}>
                                <td>{d.qualification}</td>
                                <td>{d.marks}</td>
                            </tr>
                        ))}  */}

                        {/* {EmpList?.map((x, index) => (
                            
                            <tr key={index}>
                                <td>{x.empName}</td>
                                <td>{x.empSalary}</td>
                                <td>{x.dob}</td>
                                <td>{x.gender}</td>
                                <td>{x.description}</td> */}

                        {/* <td>
                                {x.QualificationDetail.map((i, index) => (
                                    <p>{i.qualification}</p>
                                <t{i.marks}</td>
                                ))}
                                    </td> */}

                        {/* </tr> */}
                        {/* 
                        ))}  */}
                        {/* {QualificationDetail?.map((x,index)=>(
                            <tr>
                                    <td>{x.qualification}</td>
                                    <td>{x.marks}</td>
                            </tr> */}


                    </table>
                </div>

                {/* <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                > */}

                <div className="flex-initial w-2/5 scroll-mb-10">
                    <p className="font-bold text-3xl text-center text-blue-900 px-30 pb-10">Employee Form</p>
                    <div>
                        <label className='text-xl px-3  font-bold' htmlFor="name">Name:</label>

                        <input className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2"
                            type="text"
                            id="name"
                            value={EmpDetails.empName}
                            name="empName"
                            placeholder='Type Name...'
                            //onBlur={formik.handleBlur}
                            onChange={handleInputChangeForm}
                        />
                        {/* 
                            {formik.touched.empName && formik.errors.empName ? (
                                <div className="errors text-red-500">
                                    {formik.errors.empName}
                                </div>
                            ) : null} */}

                        <br />
                        <label className='text-xl px-3 font-bold' htmlFor=""> Gender: </label>
                        <input type="radio" name="gender" checked={EmpDetails.gender === "Male"} value="Male" id="" onChange={(e) => handleInputChangeForm(e)} />
                        <label className='text-xl px-3' htmlFor="regular" >Male</label>
                        <input type="radio" name="gender" checked={EmpDetails.gender === "Female"} value="Female" id="" onChange={(e) => handleInputChangeForm(e)} />
                        <label className='text-xl px-3' htmlFor="regular" >Female</label>
                        <input type="radio" name="gender" checked={EmpDetails.gender === "Other"} value="Other" id="" onChange={(e) => handleInputChangeForm(e)} />
                        <label className='text-xl px-3' htmlFor="regular" >Others</label> <br />
                        <label className='text-xl px-3 font-bold' htmlFor="">Salary : </label>
                        <input
                            className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2"
                            onChange={handleInputChangeForm}
                            value={EmpDetails.empSalary}
                            name="empSalary" type="number" id="" /> <br />
                        <label className='text-xl px-3 font-bold' htmlFor="">Date of Birth : </label>
                        <input
                            className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2"
                            onChange={handleInputChangeForm}
                            value={EmpDetails.dob}
                            type="date" name="dob" id="" /> <br />
                        <label className='text-xl px-3 font-bold' htmlFor="">Description:</label> <br />
                        <textarea
                            className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2"
                            value={EmpDetails.description}
                            onChange={handleInputChangeForm}
                            name="description" id="" cols="40" rows="3"></textarea>
                        <br />
                        {/* <input type="textarea" cols="30" rows="10"/> */}

                        <div>

                            <label className='text-xl px-3 font-bold' htmlFor=""> Qualification :</label>
                            <select className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2"
                                name="qualification" id="" value={EmpQualifications.qualification} onChange={handleInputChangeQualificationForm}>
                                <option value="">Select one</option>

                                <option value="S.L.C">S.L.C</option>

                                <option value="H.S.E.B.">H.S.E.B.</option>

                                <option value="Bachelors">Bachelors</option>

                                <option value="Masters"> Masters</option>

                            </select> <br />

                            <label className='text-xl px-3 font-bold' htmlFor="">Marks:</label>
                            <input
                                className="border border-black focus:border-blue-500 outline-none rounded-md  py-2 my-2"
                                name="marks" value={EmpQualifications.marks}
                                type="number" id="" onChange={handleInputChangeQualificationForm} />

                            <button className=' border border-green-800 border-spacing-4 rounded-md text-sm hover:bg-green-700 mx-2 p-2 hover:text-white'
                                onClick={(e) => addQualification(e)}>{buttonName}</button>
                            <div>
                                <table className="border-collapse border border-slate-500  rounded-md mx-4 my-4 w-3/5">
                                    <thead>
                                        <tr>
                                            <th className='border-2 border-slate-600 text-bold p-2 '>Qualification</th>
                                            <th className='border-2 border-slate-600  text-bold p-2'>Marks</th>
                                            <th className='border-2 border-slate-600  text-bold p-2'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {QualificationDetail?.map((x, index) => (
                                            <tr key={index}>

                                                <td className='border border-slate-600 p-2 '>{x.qualification}</td>
                                                <td className='border border-slate-600 p-2'>{x.marks}</td>
                                                <td>
                                                    <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={() => handleEdit(index)}>Edit</button>
                                                    <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={() => handleRemove(index)}>Delete</button>
                                                </td>
                                                {/* <button type='button' className='pi pi-pencil m-2' onClick={() => update(x)}> Edit</button> 
                                     <button type='button' onClick={() => remove(x)}> Delete</button> */}

                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                        <button
                            className='border bg-blue-700 border-blue-900 rounded-md  mx-2 px-4 py-2 center hover:bg-blue-950 text-white text-lg'
                            onClick={() => { handleSubmit(); reset(); }} type="submit" > Submit </button>

                    </div>
                </div>
                {/* </Formik> */}
                {/* Qualifications list */}

            </div >

        </>
    )

}

export default EmpForm
