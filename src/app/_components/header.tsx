"use client";

import Link from "next/link";
import { Button } from "src/components/ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Button variant={"ghost"}>
        <Link href={"/"}>Third Eye</Link>
      </Button>
      <div>Profile</div>
    </div>
  );
};

export default Header;
