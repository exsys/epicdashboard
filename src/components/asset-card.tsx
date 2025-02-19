type Props = {
    title: string,
    description: string,
    icon: any,
    animationDelay?: string,
    onClick?: () => void,
}

export default function AssetCard({ title, description, icon, animationDelay = "100", onClick }: Props) {
    return (
        <div className="rounded-lg border border-gray-700 py-10 px-2 flex flex-col cursor-pointer
        items-center justify-center gap-4 w-full group hover:border-gray-500 bg-[#1D242F]/50 shadow-md shadow-white/10"
            data-aos="zoom-out-up" data-aos-duration="500" data-aos-delay={animationDelay} onClick={onClick}>
            <div className="w-24 h-24 mx-auto rounded-full p-3 mb-2
                transition duration-[400ms] group-hover:fill-gray-700">
                {icon}
            </div>
            <h2 className="transition duration-[400ms] text-xl font-semibold group-hover:text-main-primary">{title}</h2>
            <div className="text-lg w-[92%] text-center">
                {description}
            </div>
        </div>
    )
}