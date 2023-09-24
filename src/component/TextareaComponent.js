import React from 'react'

function TextareaComponent({
    label,
    type,
    name,
    values,
    onChange,
    id,
    cols,
    rows,
    handleChange


}) {
    return (
        <>
            <label className='text-xl px-3 font-bold' htmlFor="">{label}</label> <br />

            <textarea
                className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2 dark:bg-slate-700"
                type={type}
                name={name}
                value={values}
                onChange={handleChange}
                id={id}
                cols={cols}
                rows={rows}
            >
            </textarea>

        </>

    )
}

export default TextareaComponent
