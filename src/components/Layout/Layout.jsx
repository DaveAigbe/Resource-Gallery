import React, { useContext } from "react";
import { MenuIcon } from "./Mobile Menu/MenuIcon";
import { GenreMenu } from "../Header/Genres-Menu/GenreMenu";
import { Profile } from "./Profile";
import { Context } from "../../context/Context";

const Layout = ({ children }) => {
  const { videos } = useContext(Context);

  return (
    <div
      className={`min-h-screen min-w-screen font-roboto p-10 flex flex-col gap-10 items-center justify-center`}
      style={{
        backgroundImage: "url('/images/blob-scene-haikeiV2.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {videos ? (
        <>
          <GenreMenu />
          <MenuIcon />
        </>
      ) : (
        <></>
      )}
      <Profile />
      {children}
    </div>
  );
};

export default Layout;
