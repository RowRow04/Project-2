import React from "react";
import { Link } from "react-router-dom";

const CardTemplate = ({ data, isJoin }) => {
  const { name, date, amount, imgSrc, color } = data;
  const colorArray = color.split(";");
  let color1, color2;
  if (colorArray.length === 2) {
    color1 = colorArray[0];
    color2 = colorArray[1];
  } else {
    color1 = colorArray[0];
    color2 = colorArray[0];
  }

  // const color

  return (
    <div
      className={` ml-0 mt-4 mr-0 mb-4 min-w-[180px] min-h-[400px] max-w-[550px] max-h-[590px] rounded-2xl  xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 relative`}
      style={{
        backgroundImage: `linear-gradient(${color1},${color2})`,
      }}
    >
      <div className=" mx-6 py-3 text-white flex flex-wrap flex-col text-lg">
        <img src={imgSrc} alt="/" className="w-[170px] h-[160px] self-center" />
        <h4 className="mt-5 mb-0 font-normal">{name}</h4>
        <h4 className="mt-1 font-normal">{date}</h4>
        <h4 className="mt-0">{amount === "0" ? "Free" : amount}</h4>
        <div className=" absolute bottom-6 right-6 text-2xl font-bold">
          {isJoin === true ? (
            <h4>JOINED</h4>
          ) : (
            <Link
              className=" hover:text-white hover:underline text-white"
              to="/EventCheckout"
            >
              +JOIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
