import { useQuery } from "@tanstack/react-query";
import { notification } from "antd"; // Import notification instead of message
import { getProfile_api } from "../../../api/user/profile_api";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["useUserProfile"],
    queryFn: getProfile_api,
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      notification.warning({
        // Use notification instead of message
        message:
          error?.response?.data?.message ||
          "Login failed. Please check your connection or contact support.",
      });
    },
  });
};
