import React from "react";
import VideoForm from "./VideoForm";
import { Icon } from "@iconify/react";

const Description = () => {
  return (
    <div className={"my-14 md:my-36 text-center lg:text-left md:max-w-6xl"}>
      <section>
        <div
          className={
            "text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-14 flex gap-4 justify-center "
          }
        >
          <h1>Smart Library</h1>
          <Icon icon="bi:book-half" />
        </div>
        <div
          className={
            "text-gray-300 leading-loose sm:text-lg md:text-xl flex flex-col md:flex-row gap-4 "
          }
        >
          <p>
            The perfect app to keep track of all the valuable resources found
            while learning a new topic. Add new videos from Youtube by entering
            their source id, attach new tags to filter videos by category,
            search for specific videos by title, and watch your resources
            without leaving the site!
          </p>
          <VideoForm />
        </div>
      </section>
    </div>
  );
};

export default Description;
