import { notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import { updatePassword_api } from "../../../api/user/profile_api";

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword_api,
    onSuccess: ({ data }) => {
      notification.success({
        message: data?.message || "Change password was successful",
      });
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
