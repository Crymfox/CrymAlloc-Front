import { useState } from "react"
import useKey from "../hooks/useKey"

type HolderType = {
    type: string,
    label: string,
    value: string | undefined,
    name: string,
    pattern?: string,
    title?: string,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    doneHandler: () => void,
    editHandler: () => void
}

const Holder = ({type, label, value, name, pattern, title, changeHandler, doneHandler, editHandler}: HolderType) => {
    const [edit, setEdit] = useState(false)
    const [focus, setFocus] = useState(false)
    const handleEscape = () => {
        if (focus) {
            document.getElementById(`${name}Input`)?.click()
            setFocus(false)
        }
    }
    useKey("Escape", handleEscape)
    return (
        <form action="" onSubmit={
            (e) => {
                e.preventDefault()
                doneHandler()
                setEdit(false)
            }
        } className="grid grid-cols-2 place-items-center">
                <div className="flex">
                    <h1 className="text-lg">{label}:&nbsp;</h1>
                    {
                        edit ? (
                            <input
                                type={type}
                                pattern={pattern}
                                title={title}
                                defaultValue={value}
                                name={name}
                                onChange={changeHandler}
                                autoFocus
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                            />
                        ) : (
                            <h1> {value} </h1>
                        )
                    }
                </div>
                {
                    edit ? (
                        <div className="flex">
                            <button type="submit" className="reg-button">Done</button>
                            <button type="button" className="reg-button" id={`${name}Input`} onClick={
                                () => setEdit(false)
                            }>Cancel</button>
                        </div>
                    ) : (
                        <button type="button" className="reg-button" onClick={
                            () => {
                                editHandler()
                                setEdit(true)
                            }
                        }>Edit</button>
                    )
                }
            </form>
    )
}

export default Holder