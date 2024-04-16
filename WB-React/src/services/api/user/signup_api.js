import { axiosAuth } from "../../axios";

export const signup_api = async (payload) => {
  return await axiosAuth.post("/api/users/auth/signup", payload);
};
