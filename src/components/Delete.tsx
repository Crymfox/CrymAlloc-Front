import { useEffect, useState, Fragment } from "react"
import { useNavigate } from "react-router-dom"
import { Dialog, Transition } from '@headlessui/react'
import { deleteAccount } from "../services/user.service"
import { AxiosError } from "axios"

const Delete = () => {

    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.getItem("token") ? null : navigate("*")
    }, [])

    const [error, setError] = useState("")

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)
    
    return (
        <>
            <div className="flex justify-center">
                <button className="reg-button" onClick={openModal}>Delete Account</button>
            </div>
            <h1> {error} </h1>
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
                                        This action can't be undone. Are you sure to proceed?
                                    </Dialog.Title>
                                    <div className="mt-4 flex justify-center gap-28">
                                        <button
                                        type="button"
                                        className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => {
                                            setError("Loading...")
                                            deleteAccount().then(() => {
                                                localStorage.clear()
                                                localStorage.setItem("delete", "delete")
                                                location.replace("/userredirect")
                                            }).catch((err: AxiosError) => {
                                                closeModal()
                                                err.response?.data ? setError(err.response.data) : setError(err.message)
                                            })
                                        }}
                                        >
                                            Yes
                                        </button>
                                        <button
                                        type="button"
                                        className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                        >
                                            No
                                        </button>
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

export default Delete