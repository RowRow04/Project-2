// import { Layout } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { eventInfo } from "../../../../../constants/static";

// const { Footer } = Layout;

const CheckoutFooter = ({ current, setCurrent, form, handleSubmit }) => {
  const navigate = useNavigate();
  const { surveys } = eventInfo;
  return (
    // <Footer className=" bg-black">
    // 	<div className=" bg-black w-full m-0 p-5"> This is Footer </div>
    // </Footer>
    <div className=" bg-black/20 w-full m-0 fixed bottom-0 left-0 right-0 py-2">
      <div className=" flex justify-center gap-x-10">
        <button
          className=" uppercase px-7 py-3 rounded-lg bg-[#df7e1b] hover:bg-[#b97838] text-white text-xl"
          onClick={() => {
            if (current === 0) {
              navigate(-1);
            } else if (current === 2 && surveys.length === 0) {
              setCurrent(0);
            } else {
              setCurrent(current - 1);
            }
          }}
        >
          Back
        </button>
        {(current === 1 && surveys.length === 0) || current === 2 || (
          <button
            type="submit"
            className="uppercase px-7 py-3 rounded-lg bg-[#df7e1b] hover:bg-[#b97838] text-white text-xl"
            onClick={handleSubmit}
            // onClick={() => {
            // 	// setCurrent(current + 1);
            // 	// if (surveys.length === 0 && current === 0) {
            // 	// 	setCurrent(current + 2);
            // 	// } else {
            // 	// setCurrent(current + 1);
            // 	// form.submit();
            // 	// }
            // }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutFooter;
