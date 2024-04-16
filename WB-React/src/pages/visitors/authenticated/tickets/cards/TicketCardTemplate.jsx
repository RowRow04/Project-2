import { QrcodeOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";

const TicketCardTemplate = ({ eventTicket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { event, transactionDetail, transactionInfo } = eventTicket;
  const { firstName, middleName, lastName } = transactionInfo.attendee[0];

  let fullName = `${firstName} ${lastName}`;
  if (middleName) {
    fullName = `${firstName} ${middleName} ${lastName}`;
  }
  const { imgSrc, name, date, color } = event[0];
  const { amount } = transactionDetail[0];
  const attendeesLength = transactionInfo.attendee.length;
  const colorArray = color.split(";");
  let color1, color2;
  if (colorArray.length === 2) {
    color1 = colorArray[0];
    color2 = colorArray[1];
  } else {
    color1 = colorArray[0];
    color2 = colorArray[0];
  }
  return (
    <>
      {attendeesLength === 1 && (
        <div
          className={`min-w-[180px] min-h-[350px] max-w-[550px] max-h-[490px] rounded-2xl  xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 relative`}
          style={{
            backgroundImage: `linear-gradient(${color1},${color2})`,
          }}
        >
          <div className=" mx-6 py-3 text-white flex flex-wrap flex-col text-xl ">
            <img
              src={imgSrc}
              alt="/"
              className=" w-[170px] h-[160px] self-center"
            />
            <h4 className=" font-semibold mt-3 mb-0">{name}</h4>
            <h4 className=" font-semibold mt-1 mb-0">{date}</h4>
            <div className=" mt-2 flex justify-between">
              <h4 className="mt-0 mb-0">PHP {Number(amount).toFixed(2)}</h4>
              <h1 className=" mt-4 py-1 px-2 rounded-full bg-white text-[#1f2d3d] text-sm font-semibold">
                Single
              </h1>
            </div>
            <h4 className=" mt-1 mb-0 text-center capitalize">{fullName}</h4>
            <div className=" flex justify-center items-center mt-1">
              <button className=" mt-3 text-lg border-2 border-white py-1 px-3 flex items-center hover:text-black hover:bg-white">
                <QrcodeOutlined className="mr-1" />
                DOWNLOAD QR CODE
              </button>
            </div>
          </div>
        </div>
      )}
      {attendeesLength === 1 ||
        transactionInfo.attendee.map((multi) => {
          let multiFullName = `${multi.firstName} ${multi.lastName}`;
          if (multi.middleName) {
            multiFullName = `${multi.firstName} ${multi.middleName} ${multi.lastName}`;
          }
          return (
            <div
              className={`min-w-[180px] min-h-[350px] max-w-[650px] max-h-[490px] rounded-2xl  xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 relative`}
              style={{
                backgroundImage: `linear-gradient(${color1},${color2})`,
              }}
            >
              <div className=" mx-6 py-3 text-white flex flex-wrap flex-col text-xl ">
                <img
                  src={imgSrc}
                  alt="/"
                  className=" w-[170px] h-[160px] self-center"
                />
                <h4 className=" font-semibold mt-3 mb-0">{name}</h4>
                <h4 className=" font-semibold mt-1 mb-0">{date}</h4>
                <div className=" mt-2 flex justify-between">
                  <h4 className="mt-0">PHP {Number(amount).toFixed(2)}</h4>
                  <button
                    onClick={showModal}
                    className="mt-4 py-0 px-1 rounded-full bg-white text-[#1f2d3d] text-sm font-semibold"
                  >
                    <span className=" rounded-full px-1 bg-[#dc3545] text-white font-semibold">
                      {attendeesLength}
                    </span>{" "}
                    Multiple
                  </button>
                </div>
                <h4 className=" mt-2 mb-0 text-center capitalize">
                  {multiFullName}
                </h4>
                <div className=" flex justify-center items-center mt-1">
                  <button className="mt-2 text-lg border-2 border-white py-1 px-3 flex items-center hover:text-black hover:bg-white">
                    <QrcodeOutlined className="mr-1" />
                    DOWNLOAD QR CODE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <Modal
        title={null}
        footer={null}
        onCancel={handleCancel}
        open={isModalOpen}
        width={1300}
      >
        <div className=" flex justify-center flex-wrap">
          {attendeesLength === 1 ||
            transactionInfo.attendee.map((multi) => {
              let multiFullName = `${multi.firstName} ${multi.lastName}`;
              if (multi.middleName) {
                multiFullName = `${multi.firstName} ${multi.middleName} ${multi.lastName}`;
              }
              return (
                <div
                  className={` m-5 min-w-[180px] min-h-[350px] max-w-[350px] max-h-[490px] rounded-2xl  xl:col-span-2 lg:col-span-2 sm:col-span-3 col-span-6 relative`}
                  style={{
                    backgroundImage: `linear-gradient(${color1},${color2})`,
                  }}
                >
                  <div className=" mx-6 py-3 text-white flex flex-wrap flex-col text-xl ">
                    <img src={imgSrc} alt="/" />
                    <h1 className=" font-semibold">{name}</h1>
                    <h1 className=" font-semibold">{date}</h1>
                    <div className=" flex justify-between">
                      <h4 className="mt-0">PHP {Number(amount).toFixed(2)}</h4>
                      <button
                        onClick={showModal}
                        className=" py-1 px-2 rounded-full bg-white text-[#1f2d3d] text-sm font-semibold"
                      >
                        <span className=" rounded-full px-1 bg-[#dc3545] text-white font-semibold">
                          {attendeesLength}
                        </span>{" "}
                        Multiple
                      </button>
                    </div>
                    <h4 className=" text-center capitalize">{multiFullName}</h4>
                    <div className=" flex justify-center items-center mt-1">
                      <button className=" text-lg border-2 border-white py-1 px-3 flex items-center hover:text-black hover:bg-white">
                        <QrcodeOutlined className="mr-1" />
                        DOWNLOAD QR CODE
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>
    </>
  );
};

export default TicketCardTemplate;
