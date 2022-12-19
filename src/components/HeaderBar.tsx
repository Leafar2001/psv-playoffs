import React from "react";

type Props = {
  Heading: String;
};

const HeaderBar = (props: Props) => {
  return (
    <div className="relative top-[20px] z-10 mx-auto flex h-[40px] w-[30vw] items-center justify-center bg-black text-[24px] font-bold uppercase text-white">
      {props.Heading}
    </div>
  );
};

export default HeaderBar;
