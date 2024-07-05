"use client"

import {useScrollTop} from "@/hooks/use-scroll-top";
import {cn} from "@/lib/utils";
import {Logo} from "@/components/logo";
import SignInButton from "@/components/signIn-button";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className="w-full flex items-center justify-center">
            <div className={cn(
                "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
                scrolled && "border-b shadow-sm"
            )}>
                <Logo/>
                <div className="ml-auto justify-end w-full flex items-center gap-x-2">
                    <SignInButton/>
                </div>
            </div>
        </div>
    );
}
