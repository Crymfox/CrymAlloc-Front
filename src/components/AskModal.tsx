import { Dialog, Transition } from '@headlessui/react'
import { Fragment, MouseEventHandler } from 'react'

type ModalProps = {
    isOpen: boolean,
    closeModal: MouseEventHandler<HTMLButtonElement>,
    allocated?: boolean,
    date?: string,
    openNext: MouseEventHandler<HTMLButtonElement>
}

const AskModal = ({isOpen, closeModal, allocated, date, openNext}: ModalProps) => {
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
                                        className="flex justify-center text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {
                                            !allocated ? (
                                                "Allocate this car?"
                                            ) : (
                                                `Availability date : ${date}`
                                            )
                                        }
                                    </Dialog.Title>
                                    {
                                        !allocated ? (
                                            <div className="mt-4 flex justify-center gap-28">
                                                <button
                                                type="button"
                                                className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={(e) => {
                                                    closeModal(e)
                                                    setTimeout((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {openNext(e)}, 300)
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
                                        ) : (
                                            <div className="mt-4 flex justify-center">
                                                <button
                                                type="button"
                                                className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                                >
                                                    Ok
                                                </button>
                                            </div>
                                        )
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AskModal