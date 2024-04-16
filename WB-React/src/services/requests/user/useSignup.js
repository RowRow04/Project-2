import { notification } from "antd";
import { signup_api } from "../../api/user/signup_api";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup_api,
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      notification.warning({
        message:
          error?.response?.data?.message ||
          "Login failed. Please check your connection or contact support.",
      });
    },
  });
};
