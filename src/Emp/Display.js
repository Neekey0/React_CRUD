import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RemoveDetails, EditDetails, GetEmployeeList } from './empAction';


function Display() {

    const dispatch = useDispatch();


    // const state = useSelector(
    //     (state) => state
    // );
    // console.log(state, "state");

    const EmpList = useSelector(
        (state) => state.EmpList,
        shallowEqual
    );

    const Emp = useSelector(
        (state) => state.EmpDetails
    );
    //console.log(EmpList, "//////////////////////////////////////");


    const removeDetails = (employee_id) => {
        dispatch(RemoveDetails(employee_id));
    }
    const editDetails = (employee_id) => {
        // let empObj = EmpList[employee_id];
        //console.log(employee_id, "Employeeeeeobjectt");
        dispatch(EditDetails(employee_id));
    }


    useEffect(() => {
        // dispatch(GetQualificationList());
        dispatch(GetEmployeeList());
    }, []);
    return (

        <>
            {/* <div className='flex-initial w-1/2'> */}
            <div>
                <p className="font-bold text-2xl pb-5 text-black  dark:text-white ">Employee Details</p>

                <table className='w-11/12 dark:bg-slate-800' >
                    <thead className='border-black  border-2 my-4 mx-4 bg-slate-600 text-white'>
                        <tr>
                            <th className='border border-y-2 p-2'> Name</th>
                            <th className='border border-y-2 p-2'>Gender</th>
                            <th className='border border-y-2 p-2'>D.O.B.</th>
                            <th className='border border-y-2 p-2'>Salary</th>
                            {/* <th className='border border-y-2 p-2'>Description</th> */}
                            {/* <th className='border border-y-2 p-2'>Qualification</th> */}
                            {/* <th className='border border-y-2 p-2'>Marks</th> */}
                            <th className='border border-y-2 p-2'>Action</th>

                        </tr>
                    </thead>


                    <tbody className={true ? 'bg-gray-200 dark:bg-slate-800 center' : ''}>
                        {EmpList?.map((x, index) => (
                            <tr className='border border-black text-center' key={x}>
                                <td>{x.emp_name}</td>
                                <td>{x.gender}</td>
                                <td>{x.dob}</td>
                                <td>{x.salary}</td>
                                {/* <td>{x.description}</td> */}
                                {/* 


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
                                </td> */}
                                <td>

                                    <button className='border border-green-800 border-spacing-4 rounded-md text-lg bg-green-700 mx-2 p-2 text-white dark:bg-slate-700' onClick={() => editDetails(x.employee_id)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg></button>
                                    <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white dark:bg-slate-700' onClick={() => removeDetails(x.employee_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                    </button>

                                </td>

                            </tr>
                        ))}


                        {/* Alternative */}

                        {/* {QualificationDetail?.map((x, index) => {
                                let qname = Qual.findIndex((item) => item.q_id == x.q_id);
                                return updateState === x.q_id ? (
                                    <tr>
                                        <td className="border border-black px-4 py-2" > */}
                        {/* {Qual[qname].q_Name} */}
                        {/* <SelectComponent */}
                        {/* label={"Qualification:"}
                                                name={"q_id"}
                                                options={Qual}
                                                value={x.q_id}
                                                handleChange={(e) => handleInputChangeQualificationForm(e, index)}

                                            >
                                            </SelectComponent>
                                        </td> */}
                        {/* <td className="border border-black px-4 py-2">

                                            <InputComponent */}
                        {/* // Label={"Marks:"}
                                                type={"number"}
                                                name={"marks"}
                                                values={x.marks}
                                                handleChange={(e) => {
                                                    formik.handleChange(e);
                                                    handleInputChangeQualificationForm(e, index);
                                                }}>
                                            </InputComponent>
                                        </td> */}
                        {/* <td className="border border-black px-4 py-2">

                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={x.q_id}>
                                        <td className="border border-black px-4 py-2">{Qual[qname].q_Name}</td>
                                        <td className="border border-black px-4 py-2">{x.marks}</td>
                                        <td className="border border-black px-4 py-2">
                                            <button className='border border-green-800 border-spacing-4 rounded-md text-sm bg-green-700 mx-2 p-2 text-white' onClick={() => handleEdit(index)}>Edit</button>
                                            <button className='border border-red-800 border-spacing-4 rounded-md text-sm bg-red-700 mx-2 p-2 text-white' onClick={() => handleRemove(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ); */}
                        {/* })
                            } */}
                    </tbody>

                </table>
            </div>
            {/* </div > */}

        </>
    )
}

export default Display
