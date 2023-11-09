import { useState } from "react"

type Form = {
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
}

const SignInValue = {
    username: '',
    password: ''
}

const SignUpValue = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    username: '',
    password: ''
}


const useAuth = (choice: string) => {
    const [form, setForm] = useState<Form>(choice === 'login' ? SignInValue : SignUpValue)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return { form, handleChange }
}

export default useAuth