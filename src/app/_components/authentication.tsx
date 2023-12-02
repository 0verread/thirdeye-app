"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import { Button } from "src/components/ui/button";

const Authentication = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session ? (
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Button>
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
