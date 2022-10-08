import React from "react";
import VideoForm from "./VideoForm";
import { Icon } from "@iconify/react";

const Description = () => {
  return (
    <div
      className={
        "my-14 md:my-36 flex flex-col md:flex-row text-center lg:text-left md:max-w-6xl gap-10"
      }
    >
      <section>
        <h1
          className={
            "text-3xl md:text-5xl lg:text-6xl text-white font-bold my-6 flex gap-4 justify-center"
          }
        >
          <div>Smart Library</div>
          <Icon icon="bi:book-half" className={""} />
        </h1>
        <p className={"text-gray-300 leading-loose md:text-xl"}>
          The perfect app to keep track of all the valuable resources found
          while learning a new topic. Add new videos from Youtube by entering
          their source id, attach new tags to filter videos by category, search
          for specific videos by title, and watch your resources without leaving
          the site!
        </p>
      </section>
      <VideoForm />
    </div>
  );
};

export default Description;
