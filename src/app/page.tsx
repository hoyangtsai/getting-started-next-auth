import { getServerSession } from "next-auth"
import { authOption } from "./api/auth/[...nextauth]/route"
import UserCard from "./components/UserCard"

export default async function Home() {
  const session = await getServerSession(authOption)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}
