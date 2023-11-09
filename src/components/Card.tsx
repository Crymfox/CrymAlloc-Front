import AskModal from './AskModal'
import { useAskModal, useAllocModal } from '../hooks/useModal'
import { getLastAllocation } from '../services/car.service'
import { useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import catchError from '../utilities/catchError'
import AllocModal from './AllocModal'

type CardProps = {
    id: number,
    type: string,
    color: string,
    price: string,
    status?: boolean
    available?: boolean
}

const Card = ({id, type, color, price, status, available}: CardProps) => {
    const {isAskOpen, closeAskModal, openAskModal} = useAskModal()
    const {isAllocOpen, closeAllocModal, openAllocModal} = useAllocModal()
    const [date, setDate] = useState('Loading...')
    return (
        <>
            <div
                className="grid place-items-center border-2 border-gray-400 w-56 h-36 cursor-pointer hover:shadow-xl duration-200"
                onClick={() => {
                    openAskModal()
                    if (status) getLastAllocation(id).then(
                        (res: AxiosResponse) => setDate(res.data)
                    ).catch(
                        (err: AxiosError) => catchError(err, setDate)
                    )
                }}
            >
                <h1><span className='font-semibold'>Type:</span> {type} </h1>
                <h1><span className='font-semibold'>Color:</span> {color} </h1>
                <h1><span className='font-semibold'>Price:</span> {price + ' DT'} </h1>
                {
                    available ? null : <h1><span className='font-semibold'>Status:</span> {status ? "Not Available" : "Available"} </h1>
                }
            </div>
            <AskModal isOpen={isAskOpen} closeModal={closeAskModal} allocated={status} date={date.substring(0, 10)} openNext={openAllocModal} />
            <AllocModal isOpen={isAllocOpen} closeModal={closeAllocModal} car={id} user={Number(localStorage.getItem("id"))} />
        </>
    )
}


export default Card