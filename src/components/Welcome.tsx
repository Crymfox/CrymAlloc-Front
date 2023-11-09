import useProfile from '../hooks/useProfile'

const Welcome = () => {
    const {user} = useProfile()
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl mx-auto mb-10">Welcome,&nbsp;{user.firstName}</h1>
            <h1 className="mx-auto">History of requests :</h1>
        </div>
    )
}

export default Welcome