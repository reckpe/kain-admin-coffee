"use client";

import { TActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === pathname;

  return (
    <Link
      href={url}
      className={`p-3 rounded flex items-center gap-3 transition-all dark:text-gray-500 ${
        isActive
          ? "!text-white bg-primary/80 svg-animate"
          : "hover:!text-primary hover:!bg-primary/10"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
