import { useEffect, useRef } from "react"

const useKey = (key: string, fn: any) => {
    
    const fnRef = useRef(fn)

    useEffect(() => {
        fnRef.current = fn
    })
    
    useEffect(() => {
        const handle = (e: any) => {
            if (e.code === key) fnRef.current(e)
        }
        addEventListener("keydown", handle)
        return () => removeEventListener("keydown", handle)
    }, [key])
}

export default useKey