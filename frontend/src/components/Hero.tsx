import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-800 pb-16">
      <div className="container mx-auto flex flex-col gap-2 ">
        <h1 className="text-5xl text-white font-bold ">
          Discover your perfect stay
        </h1>
        <p className="text-3xl text-white ">
          {" "}
          Book your dream hotel effortlessly. Explore curated accommodations
          with low pricing ...{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
