import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-5 md:px-20 lg:px-28">
            <Logo />
            <div className="flex items-center justify-center gap-2">
                <div className="hidden md:block">
                    <Search />
                </div>
                <ModeToggle />
            </div>
        </header>
    )
}