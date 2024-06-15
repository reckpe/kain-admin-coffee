import { menuItems } from "@/constants";
import React from "react";
import ActiveLink from "../common/ActiveLink";
import { TmenuItem } from "@/types";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 flex flex-col bg-white dark:bg-grayDarker">
      <a href="/" className="logo font-bold text-3xl inline-block mb-5">
        <span className="text-primary">N</span>extjs
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            url={item.url}
            title={item.title}
            icon={item.icon}
            key={index}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TmenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
