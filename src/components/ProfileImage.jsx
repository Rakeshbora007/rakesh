import profile from "../assets/sa.png";
import react from "../assets/react.jpg";
import next from "../assets/nextjs.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.jpg";
import typescript from "../assets/typescript.jpg";
import React from "react";
const ProfileImage = () => {
  return (
    <div className="flex justify-center   flex-1 cursor-pointer relative">
      <div className="flex justify-center">
        <img
          src={profile}
          alt=""
          className="rounded-full filter max-lg:mt-10 max-sm:h-[200px] max-sm:w-[200px] h-[300px] w-[300px]  shadow-glow hover:shadow-glow-hover"
        />
      </div>
      <img src={next} alt="" className=" absolute  md:flex left-8 top-9 rounded-full" width={50} height={50} />
      <img src={tailwind} alt="" className="absolute max-sm:h-[70px] max-sm:w-[70px] max-sm:left-[-30px] left-3 bottom-9 rounded-full" width={80} height={50} />
      <img src={node} alt="" className="absolute right-0 top-9 rounded-full" width={40} height={50} />
      <img src={react} alt="" className="absolute max-sm:h-[70px] max-sm:w-[70px] md:flex  max-sm:bottom-[-100px] bottom-[-130px] rounded-full " width={100} height={100} />
      <img src={typescript} alt="" className="absolute bottom-[0px] right-0 rounded-full" width={50} height={50} />
    </div>
  );
};

export default ProfileImage;