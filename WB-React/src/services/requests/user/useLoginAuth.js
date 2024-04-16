import { notification } from "antd";
import { loginApi } from "../../api/user/auth";
import { useMutation } from "@tanstack/react-query";
import { useUserAuthStore } from "../../../store/user/useAuth";

export const useLoginApi = () => {
  const { setuserData, setToken } = useUserAuthStore();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: ({ data }) => {
      setuserData(data?.data);
      setToken(data.token);
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
