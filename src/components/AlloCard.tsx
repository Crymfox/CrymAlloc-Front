import useDate from '../hooks/useDate'
import { useAskModal } from '../hooks/useModal'
import CancelModal from './CancelModal'

type CardProps = {
    id: number,
    car: string,
    startDate: Date,
    endDate: Date,
    confirmed: boolean
}

const AlloCard = ({id, car, startDate, endDate, confirmed}: CardProps) => {
    const {start, end} = useDate(startDate, endDate)
    const {isAskOpen, closeAskModal, openAskModal} = useAskModal()
    return (
        <>
            <div className="flex justify-center my-4 border-2 border-gray-400 w-full h-20 hover:shadow-xl duration-200 hover:cursor-pointer" onClick={openAskModal}>
                <h1 className="my-auto mx-4">
                    <span className='font-semibold'>Car:</span> {car}
                </h1>
                <h1 className="my-auto mx-4">
                    <span className='font-semibold'>Start:</span> {start}
                </h1>
                <h1 className="my-auto mx-4">
                    <span className='font-semibold'>End:</span> {end}
                </h1>
                <h1 className="my-auto mx-4">
                    <span className='font-semibold'>Status:</span> {confirmed ? "Confirmed." : "Waiting for response."}
                </h1>
            </div>
            <CancelModal isOpen={isAskOpen} closeModal={closeAskModal} allocId={id} />
        </>
    )
}

export default AlloCard