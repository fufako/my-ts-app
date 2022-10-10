import React from "react"

interface Props {
    name: string,
    description: string,
    complete: boolean,
    date: string
}

export const Task: React.FC<Props> = () => {
    return  (
        <div>
            <input type="text" />
        </div>

    )
}