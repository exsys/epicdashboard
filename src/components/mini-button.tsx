type Props = {
    text: string,
    tokenValue: string,
    changeStakeAmount: (value: string) => void,
}

export default function MiniButton({ text, tokenValue, changeStakeAmount }: Props) {
    return (
        <button className="bg-[#1C2936] text-[12px] cursor-pointer py-0.5 px-2 rounded-md text-gray-400
        hover:text-white hover:bg-[#253a4e]" onClick={() => changeStakeAmount(tokenValue)}>
            {text}
        </button>
    )
}