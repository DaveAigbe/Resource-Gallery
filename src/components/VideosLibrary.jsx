import React, {useContext, useState} from 'react';
import Video from "./Video";
import { VideoContext } from "../Context/VideoContext";

const MyComponent = () => {
  const [videos] = useContext(VideoContext);
  const [currentCategory, setCurrentCategory] = useState('all');

  return (
    <div className={"flex justify-center gap-6 flex-wrap max-w-8xl"}>
      {videos
          .filter(categories => categories.category === currentCategory)
          .map(category => category.ids.map(id =>
              {
                return (
                    <Video id={id} />
                )
              }
          ))
      }
    </div>
  );
};

export default MyComponent;
