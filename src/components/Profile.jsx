import { Icon } from "@iconify/react";
import React from "react";
import {Link} from 'react-router-dom';

export const Profile = () => {
  return (
    <section
      className={"absolute top-5 md:right-5 text-white flex gap-4 items-center"}
    >
      <p className={"text-xl"}>Hello, User!</p>
      <Link to={'/account'}>
        <Icon
            className={
              "text-3xl hover:text-blue-600 transition ease-in-out duration-300"
            }
            icon="bi:person-circle"
        />
      </Link>
    </section>
  );
};
