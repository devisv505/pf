"use client";

import {Button} from "@/components/ui/button";
import {LogInIcon, LogOutIcon} from "lucide-react";
import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Spinner} from "@/components/spinner";

const SignInButton = () => {
    const {data: session} = useSession();

    if (session === undefined) {
        return (
            <div className="pr-2">
                <Spinner size="lg" />
            </div>
        );
    }

    if (session!! && session.user!!) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src={session.user.image ?? undefined}/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-32"
                    align="start"
                    side="bottom"
                    forceMount
                >
                    <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <Button
                            size={"sm"}
                            variant="ghost"
                            onClick={() => signOut()}
                        >
                            <LogOutIcon className="w-4 h-4 mr-2"/>
                            Выход
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <Button
            size={"sm"}
            onClick={() => signIn()}
        >
            <LogInIcon className="w-4 h-4 mr-2"/>
            Вход
        </Button>
    )
}

export default SignInButton;