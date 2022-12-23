import AppIntroduction from "./AppIntroduction";
import { Link } from "react-router-dom";
import React from "react";
import {MainButton} from '../../components/MainButton';

export const Home = () => {
  return (
    <>
      <AppIntroduction />
      <Link to={"library"}>
          <MainButton content={'Continue to Library ➔'}/>
      </Link>
    </>
  );
};
