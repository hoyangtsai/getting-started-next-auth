"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
    csrfToken?: string;
}

export default function CredentialsForm(props: CredentialsFormProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const signInResponse = await signIn("credentials", {
            email: data.get("email"),
            password: data.get("password"),
            redirect: false,
        });

        if (signInResponse && !signInResponse.error) {
            router.push("/")
        } else {
            console.log("error:", signInResponse);
            setError("Your email or password is wrong!");
        }
    }

    return (
        <form
            className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
            onSubmit={handleSubmit}
        >
            {error && (
                <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">{error}</span>
            )}

            <input type="email" name="email" placeholder="Email"
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-md"></input>
            <input type="password" name="password" placeholder="Password"
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-md"></input>

            <button className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-300 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
                Log In
            </button>
        </form>
    )
}