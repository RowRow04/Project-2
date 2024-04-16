import {
  createAxiosInstanceWithInterceptor,
  getUsersValues,
} from "../../axios";

const defaultAxios = createAxiosInstanceWithInterceptor(
  "data",
  getUsersValues.user
);

export const getAllEventsAPI = async () => {
  try {
    const result = await defaultAxios.get(
      "/api/users/data/events/getAllEvents"
    );

    return result.data;
  } catch (error) {
    return error;
  }
};

export const getSeminarAvailedPackagesApi = async ({ params }) => {
  return await defaultAxios.get(
    "/api/users/data/events/getSeminarAvailedPackages/" + params
  );
};

export const getAllSeminarsApi = async ({ params }) => {
  return await defaultAxios.get("/api/users/data/events/getAllSeminars");
};

export const getMyEventsApi = async ({ params }) => {
  return await defaultAxios.get("/api/users/data/events/getMyEvents/" + params);
};

//EVENT TRANSACTIONS
export const createEventTransactionApi = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/transaction/createEventTransaction",
    payload
  );
};

//SEMINAR TRANSACTIONS
export const createSeminarTransactionApi = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/transaction/createSeminarTransaction",
    payload
  );
};

//PAYMENTS
export const paypalPostbackApi = async (payload) => {
  return await defaultAxios.post("/api/users/data/paypal/postback", payload);
};

export const draonpayInitiateApi = async (payload) => {
  return await defaultAxios.post("/api/users/data/dragonpay/initiate", payload);
};

export const gCashInitiateApi = async (payload) => {
  return await defaultAxios.post("/api/users/data/gcash/initiate", payload);
};

// MY TICKETS
export const getEventTicketsApi = async () => {
  return await defaultAxios.get("/api/users/data/tickets/getEventTickets");
};

export const getSeminarTicketsApi = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/tickets/getSeminarTickets",
    payload
  );
};

export const getEventSurveyApi = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/tickets/getEventSurvey",
    payload
  );
};

export const answerEventSurveyApi = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/tickets/answerEventSurvey",
    payload
  );
};
