import { Icon } from "@iconify/react";
import React from "react";

export const Profile = () => {
  return (
    <section
      className={"absolute top-5 md:right-5 text-white flex gap-4 items-center"}
    >
      <p className={"text-xl"}>Hello, User!</p>
      <Icon
        className={
          "text-3xl hover:text-blue-600 transition ease-in-out duration-300 cursor-pointer"
        }
        icon="bi:person-circle"
      />
    </section>
  );
};
