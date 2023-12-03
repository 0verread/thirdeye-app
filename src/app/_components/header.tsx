"use client";

import { EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "src/components/ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Button>
        <Link className="flex items-center gap-2" href={"/"}>
          Third Eye <EyeOpenIcon />
        </Link>
      </Button>
    </div>
  );
};

export default Header;
