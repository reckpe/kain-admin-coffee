import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="w-full p-4 flex justify-between border-b border-gray-200 dark:border-opacity-10">
      <div className="left-header flex items-center">
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="right-header"></div>
    </div>
  );
};

export default Header;
