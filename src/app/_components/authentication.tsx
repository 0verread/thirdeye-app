"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { Button } from "src/components/ui/button";

const Authentication = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session ? (
        <div className="flex flex-col gap-4">
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
          <Button onClick={() => signOut({ callbackUrl: "/" })}>
            Sign Out
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
        >
          Sign In
        </Button>
      )}
    </div>
  );
};

export default Authentication;
