import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src="/static/Loading.svg" alt="Loading" />
    </div>
  );
};

export default Loading;
