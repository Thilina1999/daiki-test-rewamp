import React from "react";

const ContentVideo = ({ videoId }) => {
  return (
    <div className="flex flex-col md:col-span-2 pb-5 lg:pb-0">
      <div className="relative overflow-hidden rounded-3xl pb-[56.25%] sm:mx-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full hover:scale-105 duration-300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContentVideo;
