import React from "react";
const Button= ({ text, bg }) => {
    return (
        <button className={`max-sm:p-2 p-5  cursor-pointer md:text-[2px] flex h-14 justify-center items-center rounded-3xl ${bg} `}>
            {text}
        </button>
    );
};

export default Button;
          