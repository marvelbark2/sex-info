import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


interface ModalProps {
    children: React.ReactNode;
    showModal: boolean
    setShowModal: (state: boolean) => void
    bgColor?: string
}

export default function Modal({
    children,
    showModal,
    setShowModal,
    bgColor = 'bg-gray-500'
}: ModalProps) {
    return (
        <>
            <Transition appear show={showModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 overflow-y-auto"
                    onClose={() => setShowModal(false)}
                >
                    <div className="flex items-center justify-center overflow-y-scroll min-h-screen px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className={`fixed inset-0 ${bgColor} bg-opacity-75`} />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {children}
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}