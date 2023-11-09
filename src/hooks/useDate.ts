import { useEffect, useState } from "react"

const useDate = (startDate: Date, endDate: Date) => {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    useEffect(() => {
        setStart(startDate.toString().substring(0, 10))
        setEnd(endDate.toString().substring(0, 10))
    }, [])
    return {start, end}
}

export default useDate