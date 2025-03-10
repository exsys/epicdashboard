"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {
    options: string[],
    callback?: (value: string) => void
}

export default function TokenSelectionButton({ options, callback }: Props) {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const callCallbackFunction = (option: string) => {
        setSelectedOption(option)
        if (callback) callback(option);
    }

    return (
        <Menu>
            <MenuButton className={`flex items-center px-4 py-1.5 bg-[#1C2936] rounded-[10px]
            min-w-[100px] cursor-pointer border border-transparent hover:border-gray-600
            text-white shadow-inner shadow-white/10`}>
                <CurrencyDollarIcon className="w-8 h-8 fill-[#1679ca]" />
                <p className="text-base ml-2 font-semibold">
                    {selectedOption}
                </p>
            </MenuButton>

            <MenuItems transition anchor="bottom" className="w-52 origin-top-right rounded-xl border border-white/5
                        bg-gray-800/90 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)]
                        focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-50">
                {options.map((option: string, index: number) => (
                    <MenuItem key={index}>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10
                        font-semibold" onClick={() => callCallbackFunction(option)}>
                            {option}
                        </button>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}