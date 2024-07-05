import {Button} from "@/components/ui/button";
import {LogInIcon, LogOutIcon} from "lucide-react";
import {signIn, signOut, useSession} from "next-auth/react";

const SignInButton = () => {
    const {data: session} = useSession();
    console.log(session)

    if (session && session.user) {
        return (
            <Button
                size={"sm"}
                onClick={() => signOut()}
            >
                <LogOutIcon className="w-4 h-4 mr-2"/>
                Log out
            </Button>
        );
    }

    return (
        <Button
            size={"sm"}
            onClick={() => signIn()}
        >
            <LogInIcon className="w-4 h-4 mr-2"/>
            Log in
        </Button>
    )
}

export default SignInButton;