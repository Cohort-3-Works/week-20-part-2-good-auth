"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <OtherHome />
    </SessionProvider>
  );
}

function OtherHome() {
  const session = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {session.status == "authenticated" && (
        <button
          className="p-5 border bg-red-500 hover:bg-red-400 rounded-xl cursor-pointer  "
          onClick={() => {
            signOut();
          }}
        >
          signOut
        </button>
      )}

      {session.status == "unauthenticated" && (
        <button
          className="p-5 border bg-blue-500 hover:bg-blue-400 rounded-xl cursor-pointer"
          onClick={() => {
            signIn();
          }}
        >
          signIn
        </button>
      )}
    </div>
  );
}
