"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex gap-4 ml-auto items-center">
                <p className="text-sky-600">{session.user.name}</p>
                <button className="p-4 bg-red-600 text-while rounded-lg" onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }

    return (
        <div className="flex gap-4 ml-auto">
            <button className="p-4 bg-green-500 text-while rounded-lg" onClick={() => signIn()}>Sign In</button>
        </div>  
    );
};


export default SignInButton;
