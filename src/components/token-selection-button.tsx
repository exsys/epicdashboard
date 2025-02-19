import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

type Props = {
    text: string,
}

export default function TokenSelectionButton({ text }: Props) {
    return (
        <div className="flex items-center px-4 py-2.5 bg-[#1C2936] rounded-[10px] min-w-[100px] cursor-pointer border border-transparent hover:border-gray-500">
            <CurrencyDollarIcon className="w-8 h-8 fill-[#1679ca]" />
            <p className="text-base ml-2 font-semibold">
                {text}
            </p>
        </div>
    )
}