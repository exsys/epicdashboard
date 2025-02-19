import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import NormalButton from './normal-button'
import DropdownButton from './dropdown-button'

export default function AddAccountForm() {
    let [isOpen, setIsOpen] = useState<boolean>(false);
    const EXCHANGES = [
        { name: "IBKR" },
        { name: "BingX" },
        { name: "SimpleFx" },
        { name: "Coincatch" },
        { name: "Primexbt" },
    ];
    const ASSETS = [
        { name: "Crude Oil" },
        { name: "BTC" },
        { name: "ETH" },
        { name: "SOL" },
        { name: "XRP" },
        { name: "SUI" },
        { name: "TAO" },
        { name: "QQQ" },
    ];

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <div onClick={open}>
                <NormalButton text="Add new Account" icon={<UserPlusIcon className="w-5 h-5 fill-white" />} />
            </div>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl
                        duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                Add new Account
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50 mb-4">
                                Add an existing Auto-Trader Account to your Portfolio to track your balances.
                            </p>
                            <div className='flex flex-col justify-center gap-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-24'>
                                        Exchange
                                    </div>
                                    <div className='w-full'>
                                        <DropdownButton options={EXCHANGES} />
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='w-24'>
                                        Asset
                                    </div>
                                    <div className='w-full z-50'>
                                        <DropdownButton options={ASSETS} />
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <label htmlFor="apiKey" className='w-24'>API Key</label>
                                    <input id='apiKey' type="text" className='w-full text-lg bg-white/10 rounded-md p-2 outline-none' />
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5
                                px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10
                                focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1
                                data-[focus]:outline-white data-[open]:bg-gray-700 w-full justify-center"
                                    onClick={close}>
                                    Add
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}