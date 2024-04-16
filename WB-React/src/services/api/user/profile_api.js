import {
  createAxiosInstanceWithInterceptor,
  getUsersValues,
} from "../../axios";

// Get User Token
const defaultAxios = createAxiosInstanceWithInterceptor(
  "data",
  getUsersValues.user
);

export const getProfile_api = async (payload) => {
  try {
    const result = await defaultAxios.get(
      "/api/users/data/profile/getProfile",
      payload
    );

    return result.data;
  } catch (error) {
    return error;
  }
};

export const updateProfile_api = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/profile/updateProfile",
    payload
  );
};

export const changeEmail_api = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/profile/changeEmail",
    payload
  );
};

export const updateEmail_api = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/profile/updateEmail",
    payload
  );
};

export const updatePassword_api = async (payload) => {
  return await defaultAxios.post(
    "/api/users/data/profile/updatePassword",
    payload
  );
};
