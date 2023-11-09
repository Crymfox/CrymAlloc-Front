import { Dialog, Transition } from '@headlessui/react'
import { AxiosError } from 'axios'
import { Fragment, MouseEventHandler, useState } from 'react'
import { createAlloc } from '../services/alloc.service'
import catchError from '../utilities/catchError'

type ModalProps = {
    isOpen: boolean,
    closeModal: MouseEventHandler<HTMLButtonElement>,
    user: number,
    car: number
}

const AllocModal = ({isOpen, closeModal, user, car}: ModalProps) => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState(false)
    const [done, setDone] = useState(false)
    const [msg, setMsg] = useState('')
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {
                                            loading ?
                                            <div className='flex justify-center'> {msg} </div> :
                                            <>
                                                <div className='grid grid-cols-2'>Start Date: <input type="date" onChange={(e) => setStartDate(e.currentTarget.value)} /></div><br />
                                                <div className='grid grid-cols-2'>End Date: <input type="date" onChange={(e) => setEndDate(e.currentTarget.value)} /></div><br />
                                            </>
                                        }
                                    </Dialog.Title>
                                    <div className="mt-4 flex justify-center gap-28">
                                        {
                                            !loading ?
                                            <>
                                                <button
                                                    type="button"
                                                    className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={() => {
                                                        setLoading(true)
                                                        setMsg('Loading...')
                                                        createAlloc({car, user, startDate, endDate})
                                                            .then(() => {
                                                                setMsg('Car Allocated successfully')
                                                                setRes(true)
                                                                setDone(true)
                                                            }).catch((err: AxiosError) => {
                                                                catchError(err, setMsg)
                                                                setRes(true)
                                                            })
                                                    }}
                                                >
                                                    Confirm
                                                </button>
                                                <button
                                                    type="button"
                                                    className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </> : null
                                        }
                                        {
                                            res ?
                                            <button
                                                type="button"
                                                className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={(e) => {
                                                    if (done) closeModal(e)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                        setRes(false)
                                                        setDone(false)
                                                    }, 200)
                                                }}
                                            >
                                                Ok
                                            </button> : null
                                        }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AllocModal