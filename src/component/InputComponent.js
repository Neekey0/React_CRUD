import React from 'react'

function InputComponent({
    Label,
    type,
    name,
    id,
    values,
    placeholder,
    handleChange,
    checked

}) {
    return (
        <>
            <label className='text-xl px-3  font-bold' htmlFor="name">{Label}</label>
            <input className="border border-black focus:border-blue-500 outline-none rounded-md px-2 py-2 my-2 dark:bg-slate-700"
                type={type}
                id={id}
                //value={EmpDetails.empName}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={values}
                checked={checked}
            />
            {/* 
            {formik.touched.empName && formik.errors.empName ? (
                <div className="errors text-red-500 font-bold">
                    {formik.errors.empName}
                </div>
            ) : null} */}

        </>
    )
}

export default InputComponent
