import React from 'react'

function SelectComponent({
    label,
    name,
    id,
    handleChange,
    value,
    options,
    placeholder
}) {
    return (
        <>
            <label className='text-xl px-3 font-bold' htmlFor=""> {label}</label>
            <select className="border border-black focus:border-blue-500 outline-none rounded-md px-4 py-2 my-2 dark:bg-slate-700"
                id={id}
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            >
                {options?.map((x) => (
                    <option value={x.q_id} key={x}>  {x.q_Name} </option>
                ))

                }

            </select>

        </>
    )
}

export default SelectComponent
