import React from "react";

interface RightSidebarProps {
  user: {
    username: string;
  };
  transactions: any[];
  banks: any[];
}

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        {/* profile banner with gradient */}
        <div className="profile-banner relative">
          {/* circular avatar overlapping bottom edge */}
          <div className="absolute left-4 bottom-[-30px] size-[70px] rounded-full border-4 border-white bg-gray-200 flex items-center justify-center shadow-md">
            <span className="text-3xl font-bold text-blue-500">
              {user.username[0]}
            </span>
          </div>

          <div className="profile-details absolute bottom-2 left-[90px]">
            <h1 className="profile-name text-lg font-semibold text-gray-800">
              {user.username}
            </h1>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between"></div>
      </section>
    </aside>
  );
};

export default RightSideBar;
