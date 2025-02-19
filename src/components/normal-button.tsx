type Props = {
    text: string,
    icon?: any,
}

export default function NormalButton({ text, icon }: Props) {
    return (
        <button className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-5 text-sm/6 
            font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
            {text}
            {icon && (
                <span className="ml-1">
                    {icon}
                </span>
            )}
        </button>
    )
}