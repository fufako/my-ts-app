import React from "react"

interface Props {
    name: string,
    description: string,
    complete: boolean,
    date: string
}

export const TaskForm: React.FC<Props> = () => {
    
    return  (
        <form className="task-form">
            <label htmlFor="name">Task name</label>
            <input type="text" name="name" />
            <label htmlFor="name">Task description</label>
            <input type="text" name="name" />
            <button>Submit</button>
        </form>

    )
}