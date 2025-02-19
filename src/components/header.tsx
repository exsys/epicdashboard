"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const headerElements = [
        { name: "Dashboard", path: "/" },
        { name: "Staking", path: "/staking" },
        { name: "Portfolio", path: "/portfolio" },
    ];
    const pathname = usePathname();

    return (
        <header className="absolute w-full p-2">
            <div className="py-7 w-full sm:w-3/5 mx-auto">
                <nav className="flex justify-center items-center">
                    <ul className="flex gap-8 sm:gap-20 items-center justify-center text-md sm:text-xl font-semibold tracking-wider
                    bg-[#1D242F]/90 py-5 px-5 sm:px-12 rounded-xl">
                        {headerElements.map(({ name, path }) => (
                            <li key={path}>
                                <Link href={path} className={`nav-link ${pathname === path ? "text-white" : "text-gray-400"} hover:text-white/90`}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}