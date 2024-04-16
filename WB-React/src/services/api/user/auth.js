import { axiosAuth } from "../../axios";

export const loginApi = async (payload) => {
  return await axiosAuth.post("/api/users/auth/login", payload);
};
