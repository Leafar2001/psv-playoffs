import React from "react";

type Props = {
  Heading: String;
};

const HeaderBar = (props: Props) => {
  return (
    <div className="w-[30vw] h-[40px] mx-auto relative top-[20px] z-10 flex justify-center items-center bg-black text-white font-bold uppercase text-[24px]">
      {props.Heading}
    </div>
  );
};

export default HeaderBar;
