import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetValues, SubmitValues, GetToDo } from './Action';

const Todo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetToDo());
    }, [])

    // const Todo = useSelector((state) => state.Todo);
    const Todo = useSelector(
        (state) => state.Todo
    )



    const todolist = useSelector((state) => state.TodoList);
    console.log(Todo, "todotod")

    const handleInputChange = (e) => {
        let keyValue = {};
        keyValue['field'] = e.target.name;
        keyValue['value'] = e.target.value;
        dispatch(SetValues(keyValue));
        console.log(keyValue, "keyvalueee");
    }

    const handleSubmit = (e) => {
        dispatch(SubmitValues(Todo));
        console.log(Todo, "todo from submit")
    }
    return (
        <>
            <label htmlFor="">ID</label>
            <input className="border border-black-500  px-2" type='number' value={Todo.id} name="id" onChange={(e) => handleInputChange(e)} /> <br />

            <label htmlFor="">Name</label>
            <input className="border border-black-500  px-2" type='text' value={Todo.name} name="name" onChange={(e) => handleInputChange(e)} /> <br />

            <label>Completion</label>
            <input type='radio' value="complete" checked={Todo.isComplete === "complete"} name="isComplete" onChange={(e) => handleInputChange(e)} /> Complete
            <input type='radio' value="notcomplete" checked={Todo.isComplete === "notcomplete"} name="isComplete" onChange={(e) => handleInputChange(e)} /> Not Complete
            <br />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>

            <table>

                <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>Completion</th>
                </tr>

                {todolist?.map((x, index) =>
                (
                    <tr>
                        <td>
                            {x.id}
                        </td>
                        <td>{x.name}</td>
                        <td>{x.isComplete}</td>
                    </tr>

                )
                )}
            </table>
        </>
    )
}

export default Todo
